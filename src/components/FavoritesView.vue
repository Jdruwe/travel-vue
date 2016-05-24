<template>
  <div>
    <div class="header">
      <span class="header__title">Favorites ({{attractions.length}})</span>
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

</style>
