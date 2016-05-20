/**
 * Created by jdruwe on 20/05/16.
 */

import {
  SWITCH_COUNTRY,
  RECEIVE_ATTRACTIONS
} from '../mutation-types'

// initial state
const state = {
  currentCountryId: null,
  all: []
}

// mutations
const mutations = {
  [SWITCH_COUNTRY] (state, countryId) {
    state.currentCountryId = countryId
  },
  [RECEIVE_ATTRACTIONS] (state, attractions) {
    state.all = attractions
  }
}

export default {
  state,
  mutations
}
