<template>
  <div id="wrapper">
    <img class="logo" src="../assets/logo.png">

    <!-- use v-link directive for navigation. -->
    <a v-link="{ path: '/countries', exact: true, activeClass: 'active' }">Countries</a>
    <a v-link="{ path: '/about', exact: true, activeClass: 'active' }">About</a>
    <a v-link="{ name: 'aboutDetail', params: { detail: 'Turkey' }, exact: true, activeClass: 'active' }">About Sweden</a>

    <ui-button type="normal" color="success">Default</ui-button>

    <router-view></router-view>

  </div>
</template>

<script>
  import store from './../vuex/store'

  export default {
    name: 'App',
    store: store
  }
</script>

<style lang="scss">
  @import '~keen-ui/dist/keen-ui.css';

  html {
    height: 100%;
  }

  #wrapper {
    color: #2c3e50;
    font-family: Source Sans Pro, Helvetica, sans-serif;

  a {
    text-decoration: none;
    color: gold;

  }

  a.active {
    color: hotpink;
  }

  }

</style>
