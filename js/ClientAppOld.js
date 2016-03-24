// // Webpack is a build tool. Better to have local scopes, without polluting the global namespace.
// // His favorite is rollup.js
// var React = require('react')
// // react corresponds to what npm installed
// var ReactDOM = require('react-dom')
// var MyTitle = require('./MyTitle')
// var div = React.DOM.div

// var MyTitleFactory = React.createFactory(MyTitle)
// // create factory is not used with JSX
// var ce = React.createElement
// // Create instance of class
// var MyFirstComponent = (
//   div(null,
//     MyTitleFactory({title: 'Props are great!', color: 'rebeccapurple'}),
//     React.createElement(MyTitle, {title: 'Use props everywhere', color: 'mediumaquamarine'}),
//     ce(MyTitle, {title: 'props are the best!', color: 'papayawhip'})
//     )
//   )
// ReactDOM.render(MyFirstComponent, document.getElementById('app'))
// // ReactDOM is how you render it.
