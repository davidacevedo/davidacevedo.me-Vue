const path = require('path');

const commonConfig = {
  entry: `${__dirname}/../src/index.js`,
  output: {
    path: `${__dirname}/../public`,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json', '.scss'],
    alias: {
      components: `${__dirname}/../src/components`,
      utils: `${__dirname}/../src/utils`,
      styles: `${__dirname}/../src/styles`,
    }
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
      {test: /\.scss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader']},
      {test: /\.sass$/, use: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']},
      {test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/'},
      {test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader', options: {name: '[name].[ext]?[hash]'}},
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: ['vue-style-loader', 'css-loader', 'sass-loader'],
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: `${__dirname}/../public`,
    publicPath: '/',
    noInfo: true,
    port: 3000,
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

module.exports = commonConfig;
