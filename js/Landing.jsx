const React = require('react')
const { Link } = require('react-router')
const { connector } = require('./Store')
const { hashHistory } = require('react-router')
class Landing extends React.Component {
  // need to do this for ES6 class
  // for every method we have we need to add a line in the constructor
  constructor (props) {
    super(props)

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
  }
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }
  gotoSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
    // prevents it from going to the next page html style
  }
  render () {
    return (
      <div className='app-container'>
        <div className='home-info'>
          <h1 className='title'>svideo</h1>
          <form onSubmit={this.gotoSearch}>
            <input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='search' type='text' placeholder='Search' />
          </form>
          <Link to='/search' className='browse-all'> or browse all</Link>
        </div>
      {/* comments */}
      </div>
  )
  }
}

const { func, string } = React.PropTypes

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)
