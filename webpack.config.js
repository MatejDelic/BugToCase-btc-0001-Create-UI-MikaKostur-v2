const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: './src/index.jsx',
    //ako treba dodaj i 
    //background: './src/background.jsx',
    contentScript: './src/contentScript/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          }
        ]
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
    }),
    new CopyPlugin({
        patterns: [
          { from: "public"}
        ],
    }),
  ],
};