import { dts } from "rollup-plugin-dts";

export default {
  input: 'dist/src/Symbols.d.ts',
  output: ['dist/Symbols.d.ts', 'dist/Symbols.d.cts', 'dist/Symbols.d.mts']
    .map((file) => ({ file, format: 'es' })),
  plugins: [dts()]
};
