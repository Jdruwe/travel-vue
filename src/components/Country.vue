<template>
  <div class="col s12 m6 l4">
    <div class="card">
      <div @click="navigateToAttractions" class="card-image waves-effect waves-block waves-light">
        <img :src="imagePath">
        <span class="card-title">{{country.name}}</span>
      </div>
      <div class="card-content">
        <p>{{shortenedIntro}}</p>
      </div>
      <div class="card-action">
        <a v-link="{ name: 'attractions', params: { id: country.id }, exact: true}">Explore
          {{country.name}}</a>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Country',
    props: ['country'],
    methods: {
      navigateToAttractions: function () {
        this.$router.go({
          name: 'attractions',
          params: {id: this.country.id}
        })
      }
    },
    computed: {
      shortenedIntro: function () {
        return this.country.intro.substring(0, 100) + ' ...'
      },
      imagePath: function () {
        return '/static/countries/' + this.country.name + '.jpg'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
