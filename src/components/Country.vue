<template>
  <div class="col s12 m6 l4">
    <div class="card">
      <div class="card-image">
        <img :src="imagePath">
        <span class="card-title">{{country.name}}</span>
      </div>
      <div class="card-content">
        <p>{{shortenedIntro}}</p>
      </div>
      <div class="card-action">
        <a href="#">Explore {{country.name}}</a>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Country',
    props: ['country'],
    computed: {
      shortenedIntro: function () {
        return this.country.intro.substring(0, 100) + ' ...'
      },
      imagePath: function () {
        return '/static/' + this.country.name + '.jpg'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
