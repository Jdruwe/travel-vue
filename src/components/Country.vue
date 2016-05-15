<template>
  <li>Country: {{country.name}}</li>
</template>

<script>
  export default {
    name: 'Country',
    props: ['country']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
