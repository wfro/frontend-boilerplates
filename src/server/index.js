// TODO: this seems sketchy, because the path this file will be
// executed from will be different in dev/prod.  Here in dev, because
// the dev server just keeps the files in memory, but in productionbabel
// will build the server to dist/index.js.  Options: don't use ES6 for
// server code, or use webpack to bundle server code and use the plugin
// that lets you use relative paths.
//
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const app = express()

if (process.env.NODE_ENV !== 'production') {
  const config = require('../../webpack.config.dev')
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }))

  app.use(webpackHotMiddleware(compiler))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../static/index.html'))
  })
} else {
  app.use('/static', express.static(path.join(__dirname, '../dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/index.html'))
  })
}

app.listen(3000, (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3000')
})
