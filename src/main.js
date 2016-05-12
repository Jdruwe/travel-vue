import Vue from 'vue'
import Keen from 'keen-ui'
import VueRouter from 'vue-router'
import App from './components/App'
import AboutView from './components/AboutView'
import CountriesView from './components/CountriesView'

Vue.use(VueRouter)
Vue.use(Keen)

var router = new VueRouter()

router.map({
  '/countries': {
    component: CountriesView
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

router.start(App, '#app')

