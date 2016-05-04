<template>
  <div>
    <button @click='increment'>Increment +1</button>
    <button @click='decrement'>Decrement -1</button>
  </div>
</template>

<script>
  import { incrementCounter, decrementCounter } from '../vuex/actions'

  export default {
    vuex: {
      actions: {
        increment: incrementCounter,
        decrement: decrementCounter
      }
    }
  }
</script>
