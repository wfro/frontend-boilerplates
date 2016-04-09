module.exports = {
  devtool: 'eval',
  entry: {
    app: ['./tests.webpack.js']
  },
  output: {
    path: './test',
    filename: 'allTests.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  }
};
