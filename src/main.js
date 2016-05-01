import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import HomeView from './components/HomeView'
import AboutView from './components/AboutView'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: HomeView
  },
  '/about': {
    component: AboutView
  }
})

router.start(App, '#app')

