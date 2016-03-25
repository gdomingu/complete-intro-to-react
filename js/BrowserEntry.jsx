const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./ClientApp')
const { match } = require('react-router')

match({ history: App.history, routes: App.routes }, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.error('BrowserEntry erorr', error)
  }
  ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
})
