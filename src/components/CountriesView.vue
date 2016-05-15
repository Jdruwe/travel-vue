<template>
  <div>
    <h1>Countries</h1>
    <ul>
      <country
        v-for="country in countries"
        :country="country">
      </country>
    </ul>
  </div>
</template>

<script>
  import Country from './Country.vue'

  export default {
    data () {
      return {
        countries: [
          {name: 'Belgium'},
          {name: 'Netherlands'},
          {name: 'France'},
          {name: 'Germany'}
        ]
      }
    },
    components: {
      Country
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
