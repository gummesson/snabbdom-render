/**
 * Imports
 */

import App from './containers/App'
import store from './store'
import snabbdom from 'snabbdom'
import events from 'snabbdom/modules/eventlisteners'
import render from '../../'

/**
 * VDOM
 */

const patch = snabbdom.init([
  events
])

const tree = () => App({
  state: store.getState(),
  dispatch: store.dispatch
})

const root = document.getElementById('root')
const update = render(patch, tree, root)
store.subscribe(update)
