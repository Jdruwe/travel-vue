/**
 * Created by jdruwe on 18/05/16.
 */

import {
  RECEIVE_COUNTRIES
} from '../mutation-types'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [RECEIVE_COUNTRIES] (state, countries) {
    state.all = countries
  }
}

export default {
  state,
  mutations
}
