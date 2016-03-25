const React = require('react')

class Details extends React.Component {
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1></h1>
        </header>
      </div>
    )
  }
}

const { object } = React.PropTypes

Details.propTypes = {
  params: object
}

// usually put getInitialState first
// Lifestyle methods
// Personal methods
// and Render last

// naive way is for more search to details making ajax call to server
// better option is to push show up to common ancestor then change props down
// data prevelence probelm, common everywhere in react.

//  <pre><code>
// {JSON.stringify(this.props, null, 4)}
// this.props.params
// </code>
// </pre>

module.exports = Details
