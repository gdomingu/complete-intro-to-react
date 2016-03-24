// Webpack is a build tool. Better to have local scopes, without polluting the global namespace.
// His favorite is rollup.js
var React = require('react')
// react corresponds to what npm installed
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')
var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)
// create factory is not used with JSX
var ce = React.createElement
// Create instance of class
var MyFirstComponent = function (){
  return(
    <div>
      <MyTitle title='Whatever' color='rebeccapurple' />
      <input />
      <MyTitle title='LOL' color='dodgersblue' />
      <MyTitle title='MOMOMOMOOO' color='#f06d06' />
    </div>
  )
}
// must use / in closing tag in jsx
// If it is Capitalized like MyTitle it is something I created.
// A composit component.
// can use 

// var MyFirstComponent = () => (
//     <div>
//       <MyTitle title='Whatever' color='rebeccapurple' />
//       <input />
//       <MyTitle title='LOL' color='dodgersblue' />
//       <MyTitle title='MOMOMOMOOO' color='#f06d06' />
//     </div>
//  )
ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
// ReactDOM is how you render it.
