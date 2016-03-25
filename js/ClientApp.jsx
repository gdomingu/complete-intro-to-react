// Webpack is a build tool. Better to have local scopes, without polluting the global namespace.
// His favorite is rollup.js
const React = require('react')
// react corresponds to what npm installed
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const ReactRouter = require('react-router')
const {Router, Route, IndexRoute, hashHistory} = ReactRouter
// const { shows } = require('../public/data')
const { store } = require('./Store')
const { Provider } = require('react-redux')

// Same as below
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// Route path == url.
// Route component == what to show when they get to that url
// const hashHistory = ReactRouter.hashHistory
// hash history keeps track of where to go with forward and back

// stateless functional class vs react createClass
const myRoutes = (props) => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
  </Route>
)
const App = React.createClass({
  // assignShow (nextState, replace) {
  //   // nextState are props that are getting passed down. In this case it is ID.
  //   // At the end of the method is is the showArray[0]
  //   // replace is a method coming from react router
  //   const showArray = shows.filter((show) => show.imdbID === nextState.params.id)
  //   if (showArray.length < 1) {
  //     return replace('/')
  //     // if there is no show send them to hom page
  //   }

  //   Object.assign(nextState.params, showArray[0])
  //   // All the properties in showArray into nextState.params
  //   return nextState
  // },
  // nextState is the show we are looking for
  // anywhere you use the connector you can get store
  // Where ever you ask for it.
  // Just plug it in where you need it.
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

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

App.Routes = myRoutes

module.exports = App
// ReactDOM is how you render it.
