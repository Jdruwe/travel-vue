<template>
  <div class="col s12 m6 l4">
    <div class="card" style="overflow: hidden;">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="imagePath">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{{ attraction.name }}<i class="material-icons right">more_vert</i></span>
      </div>

      <div class="card-action">
        <a v-if="!attraction.favorite">
          <i @click="favoriteAttraction(attraction)" class="material-icons left">favorite_border</i>
        </a>
        <a v-else>
          <i @click="undoFavoriteAttraction(attraction)" class="material-icons left">favorite</i>
        </a>
      </div>

      <div class="card-reveal" style="display: none; transform: translateY(0px);">
        <span class="card-title grey-text text-darken-4">{{ attraction.name }}<i class="material-icons right">close</i></span>
        <p>{{ attraction.detail }}</p>
      </div>
    </div>

  </div>
</template>

<script>
  import {favoriteAttraction, undoFavoriteAttraction} from '../vuex/actions'

  export default {
    name: 'Attraction',
    props: ['attraction'],
    vuex: {
      actions: {
        favoriteAttraction,
        undoFavoriteAttraction
      }
    },
    computed: {
      imagePath: function () {
        let imageName = this.attraction.name.replace(/ /g, '-').toLowerCase()
        return '/static/attractions/' + imageName + '.jpg'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .card-action {
    a {
      i {
        cursor: pointer;
        color: red;
      }
    }
  }
</style>
