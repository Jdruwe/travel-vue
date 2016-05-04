<template>
  <div>
    <h1>{{ msg }} {{ $route.params.detail }}</h1>
    <display></display>
    <increment></increment>
  </div>
</template>

<script>
  import Display from './Display.vue'
  import Increment from './Increment.vue'
  import store from '../vuex/store'

  export default {
    data () {
      return {
        msg: 'You are now on the about page'
      }
    },
    components: {
      Display,
      Increment
    },
    store
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1 {
    color: blue;
  }
</style>
