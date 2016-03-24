const React = require('react')
const shows = require('../public/data')

const Search = function () {
  return (
    <pre>
      <code>
        {JSON.stringify(shows, null, 4)}
      </code>
    </pre>
  )
}

module.exports = Search
// shows is data you want to show
// null is
// 4 is number of spaces
