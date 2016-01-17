/**
 * Helper
 */

if (typeof document === 'undefined') {
  var jsdom = require('jsdom').jsdom
  var html = '<!doctype html><html><head><meta charset="utf-8"></head><body></body></html>'
  var document = jsdom(html)
  var window = document.defaultView

  global.document = document
  global.window = window
  Object.keys(window).forEach(function(key) {
    if (!(key in global)) global[key] = window[key]
  })
}
