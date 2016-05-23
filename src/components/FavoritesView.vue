<template>
  <div>

    <div class="favorites-header">
      <h3 class="favorites-header__title">Favorites</h3>
    </div>

    <div v-if="attractions.length > 0" class="row">
      <attraction v-for="attraction in attractions" :attraction="attraction"></attraction>
    </div>

    <div v-else class="row">
      <div class="col s12 m5">
        <div class="card-panel orange lighten-1">
          <span class="white-text">
            <i class="material-icons left">warning</i>You have no favorite attractions at the moment.
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {getFavoriteAttractions} from '../vuex/getters'
  import Attraction from './Attraction.vue'

  export default {
    vuex: {
      getters: {
        attractions: getFavoriteAttractions
      }
    },
    components: {
      Attraction
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .favorites-header {
    margin-top: 10px;
    text-align: center;
    padding: 20px;

    .favorites-header__title{
      vertical-align: middle;
      font-size: 30pt;
      font-weight: 200;
    }

  }

</style>
