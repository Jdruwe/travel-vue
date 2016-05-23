<template>
  <div class="attractions">
    <div class="attractions__country">
      <p>{{country.name | capitalize}}</p>
    </div>
    <div v-if="attractions.length > 0" class="row">
      <attraction v-for="attraction in attractions" :attraction="attraction"></attraction>
    </div>

    <div v-else class="row">
      <div class="col s12 m5">
        <div class="card-panel indigo lighten-2">
          <span class="white-text">
            <i class="material-icons left">warning</i>There are no attractions available yet, please come back later.
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Attraction from './Attraction.vue'
  import {switchCountry, getAttractionsFromServer} from '../vuex/actions'
  import {getCountry, getAttractions} from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        country: getCountry,
        attractions: getAttractions
      },
      actions: {
        switchCountry,
        getAttractionsFromServer
      }
    },
    created () {
      this.switchCountry(this.$route.params.id)
      this.getAttractionsFromServer()
    },
    components: {
      Attraction
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .breadcrumb {
    color: black;
  }

  .attractions {
    .attractions__country {

      p {
        margin: 0px;
      }

      font-size: 30pt;
      margin-top: 10px;
      text-align: center;
      padding: 20px;
      font-weight: 200;
    }
  }

</style>
