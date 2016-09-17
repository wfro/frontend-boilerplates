var path = require('path');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: {
    app: ['./src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
};
