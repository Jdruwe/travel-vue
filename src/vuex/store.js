import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT, DECREMENT} from './mutation-types'

// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  // When the app starts, count is set to 0
  count: 0,
  countries: [
    {
      name: 'Belgium',
      intro: 'Belgium, officially the Kingdom of Belgium, is a federal state in Western Europe. It is a founding member of the European Union.'
    },
    {
      name: 'Netherlands',
      intro: 'The Netherlands is a country that is part of (a constituent country) of the Kingdom of the Netherlands. Most of it is in Western Europe, but there are also some parts in the Caribbean.'
    },
    {
      name: 'France',
      intro: 'France, officially the French Republic, is a country in Western Europe. Its capital city is Paris. It is a member of the European Union.'
    },
    {
      name: 'Germany',
      intro: 'The Republic of Germany, also called Germany, is a country in Central Europe. The country\'s full name is sometimes shortened to the FRG.'
    },
    {
      name: 'Spain',
      intro: 'Spain is a country in Southern Europe. It is in the Iberian Peninsula near Portugal and Gibraltar. France and the country of Andorra are on its northeast side, where the Pyrenees mountains are.'
    }
  ]
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  // A mutation receives the current state as the first argument
  // You can make any modifications you want inside this function
  [INCREMENT] (state, amount) {
    state.count = state.count + amount
  },
  [DECREMENT] (state, amount) {
    state.count = state.count - amount
  }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})
