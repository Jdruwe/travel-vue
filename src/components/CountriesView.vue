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
  import { getCountries } from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        countries: getCountries
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
