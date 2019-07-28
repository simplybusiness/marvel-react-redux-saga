const path = require('path');

const webpack = require('webpack'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  entry: {
    main: './src/index',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'assets'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ISPRODUCTION: process.env.NODE_ENV === 'production',
    }),
    new HtmlWebpackPlugin({
      title: 'Marvelous React Saga',
      filename: 'index.html', // output filename
      template: './src/index.html',
      chunks: ['main'], // Only include the right chuncks
      hash: true,
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'assets/scripts/[name].js',
  },
};
