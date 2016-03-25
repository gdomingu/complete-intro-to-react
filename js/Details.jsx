const React = require('react')
const Header = require('./Header')
const axios = require('axios')
const { connector } = require('./Store')

class Details extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      omdbData: {}
    }
  }
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.assignShow(this.props.params.id).imdbID}`)
      .then((response) => {
        this.setState({omdbData: response.data})
      })
      .catch((error) => {
        console.error('axios error', error)
      })
  }
    // life cycle method for react
    // getinitialState is another
    // perfect place to do ajax calls because it happens in browser

  assignShow (id) {
    // nextState are props that are getting passed down. In this case it is ID.
    // At the end of the method is is the showArray[0]
    // replace is a method coming from react router
    const showArray = this.props.shows.filter((show) => show.imdbID === id)
    return showArray[0]
  }
  // nextState is the show we are looking for
  // anywhere you use the connector you can get store
  // Where ever you ask for it.
  // Just plug it in where you need it.
  render () {
    const { title, description, year, poster, trailer } = this.assignShow(this.props.params.id)
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3 className='video-rating'>{this.state.omdbData.imdbRating}</h3>
    }
    return (
      <div className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          {rating}
          <img className='video-poster' src={`/public/img/posters/${poster}`} />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

const { arrayOf, object } = React.PropTypes

Details.propTypes = {
  params: object,
  shows: arrayOf(object).isRequired
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

module.exports = connector(Details)
