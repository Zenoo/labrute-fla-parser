import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';

export default {
  input: 'src/Symbols.ts',
  external: ['pixi.js'],
  output: {
    format: 'cjs',
    dir: 'dist',
  },
  plugins: [json(), typescript({
    include: /\.ts$/,
    exclude: [/\.d\.ts$/, /[\\/]src[\\/](exportXmlAsJson|parseJson)\.ts$/, /[\\/](test|examples|node_modules)[\\/]/],
    tsconfigDefaults: {
      compilerOptions: {
        target: 'ES2020',
        lib: ['ES2020', 'DOM'],
        skipLibCheck: true,
        moduleResolution: 'node',
        resolveJsonModule: true,
        allowSyntheticDefaultImports: true,
        declaration: true,
      },
    },
  })]
};
