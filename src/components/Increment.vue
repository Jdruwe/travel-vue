<template>
  <div>
    <button @click='increment'>Increment +1</button>
    <button @click='incrementBy(5)'>Increment by +5</button>
    <button @click='decrement'>Decrement -1</button>
    <input @keyup.enter="updateCounter">
  </div>
</template>

<script>
  import { incrementCounter, decrementCounter, incrementCounterBy, updateCounter } from '../vuex/actions'

  export default {
    vuex: {
      actions: {
        increment: incrementCounter,
        decrement: decrementCounter,
        incrementBy: incrementCounterBy,
        updateCounter: updateCounter
      }
    }
  }
</script>
