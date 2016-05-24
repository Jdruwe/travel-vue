/**
 * Created by jdruwe on 20/05/16.
 */

import {
  RECEIVE_ATTRACTIONS,
  FAVORITE_ATTRACTION,
  UNDO_FAVORITE_ATTRACTION
} from '../mutation-types'

// initial state
const state = {
  currentCountryId: null,
  all: [],
  favorites: []
}

// mutations
const mutations = {
  [RECEIVE_ATTRACTIONS] (state, attractions) {
    state.all = attractions
  },
  [FAVORITE_ATTRACTION] (state, attraction) {
    attraction.favorite = true
    state.favorites.push(attraction)
  },
  [UNDO_FAVORITE_ATTRACTION] (state, attraction) {
    attraction.favorite = false
    state.favorites.$remove(attraction)
  }
}

export default {
  state,
  mutations
}
