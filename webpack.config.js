const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const SRC_DIR = path.resolve(__dirname,'./src');

module.exports = {
  entry :['@babel/polyfill',`${SRC_DIR}/index.js`],
  // output:{
  //   path:__dirname + '/dist',
  //   filename : 'app.bundle.js'
  // },
  module:{
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool:'cheap-module-eval-source-map',
  devServer:{
    historyApiFallback:true,
    hot:true,
    inline:true,
    overlay:{
      warnings:true,
      errors:true,
    },
    stats:{
      color:true,
    }
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      inject:'body',
      showErrors:true,
    })
  ]
}