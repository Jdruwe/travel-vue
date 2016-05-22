<template>
  <div class="row">
    <country
      v-for="country in countries"
      :country="country">
    </country>
  </div>
</template>

<script>
  import Country from './Country.vue'
  import {getCountries} from '../vuex/getters'

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

  .row {
    margin-top: 10px;
  }

</style>
