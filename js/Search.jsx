const React = require('react')
const ShowCard = require('./ShowCard')
// const data = require('../public/data')
// now passing it in as a prop from client app
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  // This is highly encouraged for future self
  // this shows up when first rendered
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
  // this will be called onChange
  // This is where you set this.state online 17.
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

// Filter is a javascript method that like keep_if{}

// can do <ShowCard {...show} />
// <ShowCard show={show} key={show.imdbID} />

module.exports = Search
// shows is data you want to show
// null is
// 4 is number of spaces
