'use strict';

var path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: [
    {
      test: /\.js?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }
  ]
};