const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.shows.map((show) => (
        <ShowCard show={show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

module.exports = Search
// shows is data you want to show
// null is
// 4 is number of spaces
