const React = require('react')

const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout

// <MyCustomComponent>
//   <h1><h1>
// </MyCustomComponent>
// Can access the h1 children within the component
