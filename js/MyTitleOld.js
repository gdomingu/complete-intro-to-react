// // in command line webpack js/ClientApp.js
// var React = require('react')
// var div = React.DOM.div
// var h1 = React.DOM.h1
// // React is how you write the components

// // the null is the html attributes
// // like { style: { color: 'red'}}

// // this is a composit component
// // Reusable that you can use all over the place
// // Like a comment component that you can use anywhere
// // Can also nest component

// var MyTitle = React.createClass({
//   // must render
//   render () {
//     // must return a component
//     return (
//       div(null,
//         // has access to the properties that you passed in create element
//         h1({style: {color: this.props.color}}, this.props.title)
//       )
//     )
//   }
// })

// // going to be used in node.
// module.exports = MyTitle
