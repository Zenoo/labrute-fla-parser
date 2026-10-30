import { readFileSync } from 'node:fs';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';

const symbolExports = [...readFileSync('src/symbols/index.ts', 'utf8')
  .matchAll(/export \{ (\w+) \}/g)].map((match) => match[1]);

const compile = (declaration) => typescript({
  include: /\.ts$/,
  exclude: [/\.d\.ts$/, /[\\/]src[\\/](exportXmlAsJson|parseJson)\.ts$/, /[\\/](test|examples|node_modules)[\\/]/],
  tsconfigDefaults: {
    compilerOptions: {
      target: 'ES2020', lib: ['ES2020', 'DOM'], skipLibCheck: true,
      moduleResolution: 'node', resolveJsonModule: true,
      allowSyntheticDefaultImports: true, declaration,
    },
  },
});

export default [
  // Bundle the object graph once, preserving references between symbols.
  {
    input: 'src/symbols/index.ts',
    output: { file: 'dist/symbol-data.cjs', format: 'cjs' },
    plugins: [json(), compile(false)],
  },
  {
    input: 'src/Symbols.ts',
    external: ['pixi.js'],
    output: [
      { file: 'dist/Symbols.js', format: 'cjs' },
      { file: 'dist/Symbols.mjs', format: 'es' },
    ],
    plugins: [
      {
        name: 'shared-symbol-data',
        resolveId(source) {
          if (source === './symbols/index') {
            return { id: './symbol-data.cjs', external: true };
          }
        },
        transform(code, id) {
          if (id.replaceAll('\\', '/').endsWith('/src/Symbols.ts')) {
            // Explicit names support native Node ESM's CJS export detection.
            return code.replace("export * from './symbols/index'",
              `export { ${symbolExports.join(', ')} } from './symbols/index'`);
          }
        },
      },
      compile(true),
    ],
  },
];
