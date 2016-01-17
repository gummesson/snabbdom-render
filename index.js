/**
 * Imports
 */

var raf = require('component-raf')

/**
 * Exports
 */

module.exports = render

/**
 * Use `patch` to render the given `tree` on the
 * `root` node.
 *
 * @param {Function} patch
 * @param {Function} tree
 * @param {Node} root
 * @return {Function}
 */

function render(patch, tree, root) {
  var node = root
  var frame = false

  function redraw() {
    frame = false
    var vnode = tree()
    node = patch(node, vnode)
  }

  function update() {
    if (!frame) {
      raf(redraw)
      frame = true
    }
  }

  update()
  return update
}
