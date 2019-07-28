// const path = require('path');

const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge.smart(common, {
  // empty for now
});
