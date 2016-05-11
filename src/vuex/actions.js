import {INCREMENT, DECREMENT} from './mutation-types'

// An action will receive the store as the first argument.
// Since we are only interested in the dispatch (and optionally the state)
// we can pull those two parameters using the ES6 destructuring feature
export const incrementCounter = ({ dispatch }) => dispatch([INCREMENT], 1)

// export const incrementCounter = function ({dispatch}) {
//   dispatch([INCREMENT], 1)
// }

export const decrementCounter = function ({dispatch}) {
  dispatch([DECREMENT], 1)
}

// a action with additional arguments
// with ES2015 argument destructuring
// export const incrementCounterBy = function ({dispatch}, amount) {
//   dispatch([INCREMENT], amount)
// }
export const incrementCounterBy = ({ dispatch }, amount) => dispatch([INCREMENT], amount)

export const updateCounter = ({ dispatch }, e) => dispatch([INCREMENT], Number(e.target.value))

