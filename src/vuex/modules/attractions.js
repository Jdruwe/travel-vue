/**
 * Created by jdruwe on 20/05/16.
 */

import {
  SWITCH_COUNTRY,
  RECEIVE_ATTRACTIONS,
  FAVORITE_ATTRACTION,
  UNDO_FAVORITE_ATTRACTION
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
  },
  [FAVORITE_ATTRACTION] (state, attraction) {
    attraction.favorite = true
  },
  [UNDO_FAVORITE_ATTRACTION] (state, attraction) {
    attraction.favorite = false
  }
}

export default {
  state,
  mutations
}
