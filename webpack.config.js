const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js'
  },
  modules: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        use: ExtractTextWebpackPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        }),
        test: /\.(s*)css$/
      },
      {
        use: [{
          loader: 'url-loader',
          options: {
            limit: '8000',
            name: 'images/[hash]-[name].[ext]'
          }
        }],
        test: /\.(png|jp(e*)g|svg)$/
      }
    ]
  },
  plugins: [new ExtractTextWebpackPlugin('style.css')]
};

module.export = config;
