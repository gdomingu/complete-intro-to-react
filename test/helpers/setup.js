require('babel-register')
require('babel-polyfill')

// tests will think they are in the dom
// run something like phantom only faster because isn't actual browser
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
// line 6 we are creating the document
global.window = document.defaultView
global.navigator = window.navigator
// window is global in browser.
// global is the window in node.
// Setting up global to be like a browser like environment
// kent c dots stolen.

// npm install --save-dev babel-polyfill