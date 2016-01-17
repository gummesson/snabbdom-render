/**
 * Imports
 */

import Counter from './Counter'
import * as creators from '../actions/counter'
import { bindActionCreators } from 'redux'

/**
 * App
 */

const App = ({ state, dispatch }) => {
  const { counter } = state
  const actions = bindActionCreators(creators, dispatch)
  return Counter({ counter, ...actions })
}

/**
 * Exports
 */

export default App
