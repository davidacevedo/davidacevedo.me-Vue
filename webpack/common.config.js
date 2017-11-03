const path = require('path');

const commonConfig = {
  entry: `${__dirname}/../src/index.js`,
  output: {
    path: `${__dirname}/../public`,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: `${__dirname}/../public`,
    publicPath: '/',
    port: 3000,
  }
}

module.exports = commonConfig;
