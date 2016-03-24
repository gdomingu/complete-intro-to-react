// Webpack is a build tool. Better to have local scopes, without polluting the global namespace.
// His favorite is rollup.js
const React = require('react')
// react corresponds to what npm installed
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const ReactRouter = require('react-router')
const {Router, Route, hashHistory} = ReactRouter
// Same as below
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// Route path == url.
// Route component == what to show when they get to that url
// const hashHistory = ReactRouter.hashHistory
// hash history keeps track of where to go with forward and back

const App = function () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Landing} />
    </Router>
  )
}

// must use / in closing tag in jsx
// If it is Capitalized like MyTitle it is something I created.
// A composit component.
// Arrow syntax
// var MyFirstComponent = () => (
//     <div>
//       <MyTitle title='Whatever' color='rebeccapurple' />
//       <input />
//       <MyTitle title='LOL' color='dodgersblue' />
//       <MyTitle title='MOMOMOMOOO' color='#f06d06' />
//     </div>
//  )
ReactDOM.render(<App />, document.getElementById('app'))
// ReactDOM is how you render it.
