# snabbdom-render

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

A rendering loop for [snabbdom][snabbdom].

## Installation

```
npm install snabbdom-render
```

## Usage

``` javascript
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import render from 'snabbdom-render'

const patch = snabbdom.init([])
const tree = () => h('p', new Date().toISOString())
const root = document.getElementById('root')

const update = render(patch, tree, root)
setInterval(update, 3000)
```

For an example built with [Redux][redux], see [examples/counter][counter].

## API

### update = render(patch, tree, root)

Use `patch` to render the given `tree` on the `root` node.

## License

[MIT][license-url]

[npm-img]: https://img.shields.io/npm/v/snabbdom-render.svg?style=flat-square
[npm-url]: https://npmjs.com/package/snabbdom-render
[license-img]: http://img.shields.io/npm/l/snabbdom-render.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/snabbdom-render.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/snabbdom-render
[snabbdom]: https://www.npmjs.com/package/snabbdom
[redux]: https://github.com/rackt/redux
[counter]: examples/counter
