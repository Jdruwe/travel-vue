import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import AboutView from './components/AboutView'
import CountriesView from './components/CountriesView'
import AttractionsView from './components/AttractionsView'
import FavoritesView from './components/FavoritesView'

Vue.use(VueRouter)

var router = new VueRouter()

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

Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut'
})

router.redirect({
  '*': '/countries'
})

router.start(App, '#app')
