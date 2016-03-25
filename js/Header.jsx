const React = require('react')
const { Link } = require('react-router')
const { func, bool, string } = React.PropTypes
const { connector } = require('./Store')
const Header = React.createClass({
  propTypes: {
    setSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchTermEvent (event) {
    // this.props.handleSearchTermChange(event.target.value)
    this.props.setSearchTerm(event.target.value)
    // this is coming from store.jsx
  },
  render () {
    let utilSpace
    // component we are going to use
    if (this.props.showSearch) {
      utilSpace = <input type='text' className='search-input' placeholder='search' value={this.props.searchTerm} onChange={this.handleSearchTermEvent} />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>svideo</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})
// {utilSpace} is a variable with already rendered jsx so you can just use it like that.

// check out elm
module.exports = connector(Header)
// wrap it in maptoState match to dispatch props
// glue between react and redux.

