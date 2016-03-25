const redux = require('redux')
const reactRedux = require('react-redux')
const { shows } = require('../public/data')

const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  searchTerm: '',
  shows
}

// making our first reducer
// using es6 default params
// state needs to be the entire object
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action)
    default:
      return state
  }
}
// always return a newState object at the end of reducers. So assign everything to a empty object.
// What ever was in it for searchTerm, we are overriding it with the action.value
// a pure function input in output out, not modifying anything.
// We need the default to return the first state

const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
  ))

// this is the only call to redux. The rest is just javascript.

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    shows: state.shows
    // pass shows in with payload.
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => {
      dispatch({ type: SET_SEARCH_TERM, value: searchTerm })
    }
  }
}

// making wrapper for react component

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }

// redux is a middleware.

// this.props.setSearchTerm('house')
