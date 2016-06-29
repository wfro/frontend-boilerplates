const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const config = require('../../webpack.config.dev');
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use('/static', express.static(path.join(__dirname, '../dist')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../static/index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
