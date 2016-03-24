var div = React.DOM.div
var h1 = React.DOM.h1
// React is how you write the components
// the null is the html attributes
// like { style: { color: 'red'}}

// this is a composit component
// Reusable that you can use all over the place
// Like a comment component that you can use anywhere
// Can also nest component

var MyTitle = React.createClass({
  // must render
  render () {
    // must return a component
    return (
      div(null,
        // has access to the properties that you passed in create element
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)
// create factory is not used with JSX
var ce = React.createElement
// Create instance of class
var MyFirstComponent = (
  div(null,
    MyTitleFactory({ title: 'Props are great!', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Use props everywhere', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'props are the best!', color: 'papayawhip'})
    )
  )
// 
ReactDOM.render(MyFirstComponent, document.getElementById('app'))
// ReactDOM is how you render it.