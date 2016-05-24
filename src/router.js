import AboutView from './components/AboutView'
import CountriesView from './components/CountriesView'
import AttractionsView from './components/AttractionsView'
import FavoritesView from './components/FavoritesView'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter({
  history: false
})

router.map({
  '/countries': {
    component: CountriesView
  },
  '/countries/:id': {
    name: 'attractions',
    component: AttractionsView
  },
  '/favorites': {
    name: 'favorites',
    component: FavoritesView
  },
  '/about': {
    component: AboutView
  },
  '/about/:detail': {
    name: 'aboutDetail',
    component: AboutView
  }
})

router.redirect({
  '*': '/countries'
})

export default router
