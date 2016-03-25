/* eslint-env mocha */
// white list a bunch of mocha stuff for linter

const { expect } = require('chai')
// assertion library
// later look up that const {} syntax
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow, mount } = require('enzyme')
// shallow only gives you a string back so 
// only useful for markup not.
// shallow doesn't allow for interaction and events.
// everything you can do with shallow you can do with mount
// mount is slower
const { shows } = require('../public/data')

describe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>))
    // Shallow is only going to look into Search
    // Only render that component
    // stub out children like "ShowCard". Way faster
  })

  it('should render as many shows are there are data for', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length) 
    // find returns an array of all showcards
    // Do all of these get shown on the first render.
  })

  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    // talking directly to DOM node
    input.simulate('change')
    // trigger change event in react
    expect(wrapper.state('searchTerm')).to.equal('house')
    // does the state match the value of the input
    expect(wrapper.find('.show-card').length).to.eq(2)
    // can't use the compent to find it, need to find the css because it's mount
  })
})

// constains is part of enzyme not mocha.
// can debug with console.log(wrapper.debug())


// describe('<Search />', () => {
//   it('should pass', () => {
//     expect(1 + 1 === 2).to.be.true
//   })
// })
// to.be.true 
// to.be.equal
// description for yourself 
// about what you are testing
// putting an xdescribe will cause it to be pending
// in commandline mocha --require test/helpers/setup.js
// mocha -R nyan --require test/helpers/setup.js to get nyan cat!
