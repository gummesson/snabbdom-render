/**
 * Actions
 */

export const INCREMENT = 'COUNTER/INCREMENT'
export const DECREMENT = 'COUNTER/DECREMENT'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}
