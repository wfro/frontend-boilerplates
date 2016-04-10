import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.config.dev'

const app = express()
const compiler = webpack(config)

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }))

  app.use(webpackHotMiddleware(compiler))
} else {
  express.static('/static', path.join(__dirname, 'dist'))
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../static/index.html'))
})

app.listen(3000, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('Listening at http://localhost:3000')
})
