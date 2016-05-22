/**
 * Created by jdruwe on 20/05/16.
 */

import {
  SWITCH_COUNTRY,
  RECEIVE_ATTRACTIONS,
  FAVORITE_ATTRACTION
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
  [FAVORITE_ATTRACTION] (state, attractionId) {
    console.log('favoriting:' + attractionId)
    for (var i = 0; i < state.all.length; i++) {
      if (state.all[i].id === attractionId) {
        state.all[i].favorite = true
        console.log('Setting on true')
        break
      }
    }
  }
}

export default {
  state,
  mutations
}
