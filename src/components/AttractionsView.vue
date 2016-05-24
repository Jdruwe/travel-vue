<template>
  <div>
    <div class="attractions-country" v-if="country">
      <span class="attractions-country__name">{{country.name | capitalize}}</span>
      <img class="attractions-country__flag" :src="imagePath" alt="flag">
    </div>
    <div v-if="attractions.length > 0" class="row">
      <attraction v-for="attraction in attractions" :attraction="attraction"></attraction>
    </div>

    <div v-else class="row">
      <div class="col s12 m5">
        <div class="card-panel orange lighten-1">
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
      this.getAttractionsFromServer()
    },
    components: {
      Attraction
    },
    computed: {
      imagePath: function () {
        return '/static/flags/' + this.country.name + '.png'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .breadcrumb {
    color: black;
  }

  .attractions-country {
    font-size: 30pt;
    margin-top: 10px;
    text-align: center;
    padding: 20px;
    font-weight: 200;

    .attractions-country__flag{
      vertical-align: middle;
    }

  }


</style>
