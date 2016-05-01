import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)

var router = new VueRouter()

router.map(Routes)
router.start(App, 'app')

