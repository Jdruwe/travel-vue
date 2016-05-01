<template>
  <div id="wrapper">
    <img class="logo" src="../assets/logo.png">

    <!-- use v-link directive for navigation. -->
    <a v-link="{ path: '/' }">Home</a>
    <a v-link="{ path: '/about' }">About</a>

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
    color: gold;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }

  }

</style>
