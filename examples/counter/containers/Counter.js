/**
 * Imports
 */

import Text from '../components/Text'
import Button from '../components/Button'
import h from 'snabbdom/h'

/**
 * Counter
 */

const Counter = ({ counter, increment, decrement }) =>
  h('div#root', [
    Text(counter),
    Button({ click: increment }, '+'),
    Button({ click: decrement }, '-')
  ])

/**
 * Exports
 */

export default Counter
