<template>
  <div id="wrapper">
    <img class="logo" src="../assets/logo.png">

    <!-- use v-link directive for navigation. -->
    <a v-link="{ path: '/', exact: true, activeClass: 'active' }">Home</a>
    <a v-link="{ path: '/about', exact: true, activeClass: 'active' }">About</a>
    <a v-link="{ name: 'aboutDetail', params: { detail: 'Turkey' }, exact: true, activeClass: 'active' }">About Sweden</a>

    <router-view></router-view>

  </div>
</template>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #wrapper {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;

  a {
    text-decoration: none;
    color: gold;

  }

  a.active {
    color: hotpink;
  }

  .logo {
    width: 100px;
    height: 100px
  }

  }

</style>
