const merge = require('webpack-merge');

const common = require('./webpack.common');

const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // eslint-disable-line

module.exports = merge.smart(common, {
  mode: 'production',
  devtool: 'cheap-source-map',
  plugins: [new CleanWebpackPlugin()],
});
