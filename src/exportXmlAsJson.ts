import fs from 'fs';
import convert from 'xml-js';
import { parseJson } from './parseJson';
import { Symbol } from './common';

const jsons: Record<string, string> = {};

// Go through all files in /xml folder and get their JSON representation
const convertXMLtoJSON = (dir: string) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = `${dir}/${file}`;

    // Ignore non-XML files
    if (!filePath.endsWith('.xml')) return;

    // Read XML file
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const splitFilePath = filePath.split('/');
    const symbol = splitFilePath[splitFilePath.length - 1].split('.')[0];

    // Convert XML to JSON
    const json = convert.xml2json(fileContent);

    // Store JSON in memory
    jsons[symbol] = json;
  };
};

convertXMLtoJSON('./src/xml');

// Empty the /json folder
fs.readdirSync('./src/json').forEach((file) => {
  fs.unlinkSync(`./src/json/${file}`);
}); 

// Go through all JSON strings and create JSON files
Object.entries(jsons).forEach(([symbol, json]) => {
  if (!json) {
    console.log(`No JSON found for ${symbol}`);
    return;
  }

  // Create subfolder if needed
  if (!fs.existsSync('./src/json')) {
    fs.mkdirSync('./src/json');
  }

  // Write JSON file
  fs.writeFileSync(`./src/json/${symbol.split(' ').join('')}.json`, JSON.stringify(parseJson(json), null, 2));
});

// Empty the /symbols folder
fs.readdirSync('./src/symbols').forEach((file) => {
  fs.unlinkSync(`./src/symbols/${file}`);
});

// Export JSON files as .ts files
const files = fs.readdirSync('./src/json');

for (const file of files) {
  const filePath = `./src/json/${file}`;
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const symbol = JSON.parse(fileContent) as Symbol;
  
  const dependencies = new Set<string>();

  // For each layer
  symbol.layers.forEach((layer, i) => {
    // For each frame
    layer.frames.forEach((frame, j) => {
      // For each part
      frame.parts.forEach((part) => {
        // If the part is a symbol
        if (typeof part !== 'string') {
          // Check if the symbol has to be replaced
          if (part.name.startsWith('REPLACE|')) {
            const name = part.name.split('|')[1];

            // Add the symbolItem to the dependencies
            dependencies.add(name);

            // Replace the part with its name
            part = part.name;
          }
        }
      });
    });
  });

  let stringifiedSymbol = JSON.stringify(symbol, null, 2);

  // Replace `"name":"REPLACE|{name}|REPLACE","layers":[]` with `...{name}`
  stringifiedSymbol = stringifiedSymbol.replace(/"name": "REPLACE\|(.*)\|REPLACE",\n\s+"layers": \[\]/g, '...$1');

  const newFileContent = `import { Symbol } from '../common';
${[...dependencies].map((dependency) => `import ${dependency.split(' ').join('')} from './${dependency}';`).join('\n')}

const ${symbol.name.split(' ').join('')}: Symbol = ${stringifiedSymbol};

export default ${symbol.name.split(' ').join('')};
`;

  // Write Typescript file
  fs.writeFileSync(`./src/symbols/${file.split('.')[0]}.ts`, newFileContent);
};

// Create index.ts file
let indexFileContent = files.map((file) => `import ${file.split('.')[0]} from './${file.split('.')[0]}';`).join('\n');
indexFileContent += `\n\nexport default {\n${files.map((file) => `  ${file.split('.')[0]},`).join('\n')}\n};`;

// Write index.ts file
fs.writeFileSync('./src/symbols/index.ts', indexFileContent);