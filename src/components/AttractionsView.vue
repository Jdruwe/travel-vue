<template>
  <div>
    <h1>{{country | capitalize}}</h1>
  </div>
</template>

<script>
  export default {
    created () {
      console.log(this.$route.params)
    },
    computed: {
      country: function () {
        return this.$route.params.country
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
