import Vue from 'vue'
import Vuex from 'vuex'

// import parts from modules
import countries from './modules/countries'
import attractions from './modules/attractions'

// Make vue aware of Vuex
Vue.use(Vuex)

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
// combine sub modules
  modules: {
    countries,
    attractions
  }
})
