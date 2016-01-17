/**
 * Imports
 */

var render = require('../')
var snabbdom = require('snabbdom')
var h = require('snabbdom/h')
var test = require('tape')
var raf = require('component-raf')
var serialize = require('dom-serialize')

/**
 * Tests
 */

test('render(patch, tree, root)', function(assert) {
  var entry = document.createElement('p')
  entry.id = 'test'
  document.body.appendChild(entry)

  var patch = snabbdom.init([])
  var tree = function() { return h('p#test', 'foobar') }
  var root = document.querySelector('#test')
  var update = render(patch, tree, root)

  assert.equal(serialize(root), '<p id="test"></p>')
  assert.equal(typeof update, 'function')

  raf(function() {
    var node = document.querySelector('#test')
    assert.equal(serialize(node), '<p id="test">foobar</p>')
    assert.end()
  })
})
