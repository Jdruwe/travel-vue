<template>
  <div>
    <h1>{{country | capitalize}}</h1>
    <div>id: {{currentCountryId}}</div>
  </div>
</template>

<script>
  import {getAttractionsFromCountry} from '../vuex/actions'
  import {getCurrentCountryId} from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        currentCountryId: getCurrentCountryId
      },
      actions: {
        getAttractionsFromCountry
      }
    },
    created () {
      this.getAttractionsFromCountry(0)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .breadcrumb {
    color: black;
  }

</style>
