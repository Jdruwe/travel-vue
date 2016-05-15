<template>
  <div id="wrapper">

    <div class="group">
      <ui-toolbar type="colored" text-color="white" title="Travel" nav-icon="room">
        <div slot="actions">
          <ui-button icon="room" color="primary" @click="navigateToCountries">Countries</ui-button>
          <ui-button icon="star" color="primary" @click="navigateToCountries">Favorites</ui-button>
          <ui-button icon="info" color="primary" @click="navigateToAbout">About</ui-button>
        </div>
      </ui-toolbar>
    </div>

    <!-- use v-link directive for navigation. -->
    <!--<a v-link="{ path: '/countries', exact: true, activeClass: 'active' }">Countries</a>-->
    <!--<a v-link="{ path: '/about', exact: true, activeClass: 'active' }">About</a>-->
    <!--<a v-link="{ name: 'aboutDetail', params: { detail: 'Turkey' }, exact: true, activeClass: 'active' }">About Sweden</a>-->

    <div class="container">
      <router-view></router-view>
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
    },
    methods: {
      navigateToCountries: function () {
        this.$router.go('/countries')
      },
      navigateToFavorites: function () {
        this.$router.go('/countries')
      },
      navigateToAbout: function () {
        this.$router.go('/about')
      }
    }
  }
</script>

<style lang="scss">
  @import '~keen-ui/dist/keen-ui.css';

  body {
    margin: 0px;
    font-family: Roboto;
  }

  .container {
    margin: 8px;
  }

  .ui-toolbar-right {
    margin-right: 8px;
  }

</style>
