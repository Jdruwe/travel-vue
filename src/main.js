import Vue from 'vue'
import App from './components/App'
import router from './router'
import store from './vuex/store' // vuex store instance
import { sync } from 'vuex-router-sync'

Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut'
})

sync(store, router)

router.start(App, '#app')
