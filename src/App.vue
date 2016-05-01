<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">

    <!-- use v-link directive for navigation. -->
    <a v-link="{ path: '/' }">Home</a>
    <a v-link="{ path: '/about' }">About</a>

    <router-view></router-view>

  </div>
</template>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
