/* eslint-disable prefer-named-capture-group */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const dev = argv.mode === 'development';

  const plugins = [
    new HtmlWebpackPlugin({ template: './test/index.html' })
  ];

  return {
    entry: './test/index.ts',
    devtool: dev ? 'source-map' : false,
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env'] }
        }
      ]
    },
    resolve: { extensions: ['*', '.js', '.ts'] },
    output: {
      path: path.resolve(__dirname, 'dist2/'),
      filename: 'bundle.js'
    },
    devServer: {
      port: 3000,
      static: false,
      hot: false,
      liveReload: true,
    },
    plugins
  };
};
