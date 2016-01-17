/**
 * Imports
 */

import h from 'snabbdom/h'

/**
 * Button
 */

const Button = ({ click }, value) =>
  h('button', {
    on: { click: () => click() }
  }, value)

/**
 * Exports
 */

export default Button
