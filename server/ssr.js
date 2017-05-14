// -----------------------------------------------------------------
// This is the primary entry point in the app to start up the server
// It contains the generic server startup logic without the React
// server-side rendering logic (which is contained in serverRender)
// -----------------------------------------------------------------
import express from 'express';
import path from 'path';

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import serverRender from '../built/serverbundle.js';

const app = express();
const port = 3000;

//console.log ('dir is ', __dirname)
const builtDir = path.join(__dirname, '../built')
const viewsDir = __dirname

// Use this middleware to set up hot module reloading via webpack.
const clientConfig = webpackConfig [0]
const compiler = webpack(clientConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: clientConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// Serve built files with express static files middleware
app.use('/built', express.static(builtDir));

// Initialise EJS template engine
//app.set('views', path.join(__dirname, 'server'))
app.set('views', viewsDir)
app.set('view engine', 'ejs')

// Serve normal requests with our handleRender function
app.get('*', serverRender);

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
