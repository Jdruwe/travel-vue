<template>
  <div id="wrapper">
    <nav>
      <div class="nav-wrapper deep-purple darken-1">
        <a href="#" class="brand-logo"><i class="material-icons left">room</i>Travel</a></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a v-link="{ path: '/countries', exact: true, activeClass: 'active' }">Countries</a></li>
          <li><a v-link="{ path: '/countries', exact: true, activeClass: 'active' }">Favorites</a></li>
          <li><a v-link="{ path: '/about', exact: true, activeClass: 'active' }">About</a></li>
        </ul>
      </div>
    </nav>

    <!-- use v-link directive for navigation. -->
    <!--<a v-link="{ path: '/countries', exact: true, activeClass: 'active' }">Countries</a>-->
    <!--<a v-link="{ path: '/about', exact: true, activeClass: 'active' }">About</a>-->
    <!--<a v-link="{ name: 'aboutDetail', params: { detail: 'Turkey' }, exact: true, activeClass: 'active' }">About Sweden</a>-->

    <div class="container">
      <router-view class="animated" transition="fade" transition-mode="out-in"></router-view>
    </div>

  </div>
</template>

<script>
  import store from './../vuex/store'

  export default {
    name: 'App',
    store: store,
    events: {
      'nav-icon-clicked': function () {
        this.$router.go('/')
      }
    }
  }
</script>

<style lang="scss">

  .brand-logo {
    margin-left: 8px;
  }

</style>
