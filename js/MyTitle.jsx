// in command line webpack js/ClientApp.js
const React = require('react')
const div = React.DOM.div
const h1 = React.DOM.h1
// React is how you write the components

// the null is the html attributes
// like { style: { color: 'red'}}

// this is a composit component
// Reusable that you can use all over the place
// Like a comment component that you can use anywhere
// Can also nest component

const MyTitle = React.createClass({
  // must render
  render () {
    // must return a 
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={ style }>
         {this.props.title}
        </h1>
      </div>
    )
  }
})

// anything in {} are js expressions
//  the inner {} are a js object
// const is ES6 thing instead of var
// going to be used in node.
// const i don't expect this to change'
// let for planning on x to change down the line.
// Code is more for future developers rather than computers
module.exports = MyTitle
