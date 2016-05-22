<template>

  <div id="wrapper">

    <header>
      <nav>
        <div class="nav-wrapper indigo">
          <a href="#" class="brand-logo"><i class="material-icons left">room</i>Travel</a></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li v-link-active><a v-link="{ path: '/countries', exact: true, activeClass: 'active' }">Countries</a></li>
            <li v-link-active><a v-link="{ path: '/favorites', exact: true, activeClass: 'active' }">Favorites</a></li>
            <li v-link-active><a v-link="{ path: '/about', exact: true, activeClass: 'active' }">About</a></li>
          </ul>
          <ul id="slide-out" class="side-nav">
            <li v-link-active><a v-link="{ path: '/countries', exact: true, activeClass: 'active' }">Countries</a></li>
            <li v-link-active><a v-link="{ path: '/favorites', exact: true, activeClass: 'active' }">Favorites</a></li>
            <li v-link-active><a v-link="{ path: '/about', exact: true, activeClass: 'active' }">About</a></li>
          </ul>
          <a href="#" data-activates="slide-out" class="button-collapse"><i class="small material-icons">menu</i></a>
        </div>
      </nav>
    </header>

    <main class="container">
        <router-view class="animated" transition="fade" transition-mode="out-in"></router-view>
    </main>

    <footer class="page-footer indigo">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Travel</h5>
            <p class="grey-text text-lighten-4">This website was build to demonstrate some of the potential of VueJS</p>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2016 <a class="grey-text text-lighten-4" href="http://jeroendruwe.be" target="_blank">Jeroen Druwé</a>
          <a class="grey-text text-lighten-4 right footerLink" href="https://github.com/Jdruwe" target="_blank">Github</a>
          <a class="grey-text text-lighten-4 right footerLink" href="https://be.linkedin.com/in/jeroen-druwé-42840567" target="_blank">LinkedIn</a>
          <a class="grey-text text-lighten-4 right footerLink" href="https://twitter.com/JeroenDruwe" target="_blank">Twitter</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
  import store from './../vuex/store'
  var $ = window.jQuery = require('jquery')
  require('materialize-css/bin/materialize.js')

  import {getCountriesFromServer} from '../vuex/actions'

  export default {
    name: 'App',
    store: store,
    events: {
      'nav-icon-clicked': function () {
        this.$router.go('/')
      }
    },
    vuex: {
      actions: {
        getCountriesFromServer
      }
    },
    ready () {
      $(function () {
        $('.button-collapse').sideNav()
      })
    },
    created () {
      this.getCountriesFromServer()
    }
  }
</script>

<style lang="scss">

  .brand-logo {
    margin-left: 8px;
  }

  .fadeIn {
    -webkit-animation: fadeIn 0.3s; /* Safari 4+ */
    -moz-animation: fadeIn 0.3s; /* Fx 5+ */
    -o-animation: fadeIn 0.3s; /* Opera 12+ */
    animation: fadeIn 0.3s; /* IE 10+, Fx 29+ */
  }

  .fadeOut {
    -webkit-animation: fadeOut 0.3s; /* Safari 4+ */
    -moz-animation: fadeOut 0.3s; /* Fx 5+ */
    -o-animation: fadeOut 0.3s; /* Opera 12+ */
    animation: fadeOut 0.3s; /* IE 10+, Fx 29+ */
  }

  .button-collapse {
    i{
      margin-left: 8px;
    }
  }

  #wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }

  .footerLink{
    margin-left: 5px;
    margin-right: 5px;
  }

</style>
