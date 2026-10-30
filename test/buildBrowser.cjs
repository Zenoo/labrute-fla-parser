const path = require('node:path');
const webpack = require('webpack');

module.exports = (outputPath) => new Promise((resolve, reject) => {
  const compiler = webpack({
    mode: 'development',
    target: 'web',
    entry: path.resolve(__dirname, 'fixtures/browser.mjs'),
    devtool: false,
    output: { path: outputPath, filename: 'browser.js' },
    optimization: { minimize: false, concatenateModules: false },
  });
  compiler.run((error, stats) => {
    compiler.close((closeError) => {
      if (error || closeError) return reject(error || closeError);
      if (stats.hasErrors()) return reject(new Error(stats.toString('errors-only')));
      resolve(stats.toJson({ all: false, modules: true }));
    });
  });
});
