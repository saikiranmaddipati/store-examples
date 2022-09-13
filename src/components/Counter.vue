<template>
  <div id="app">
  <p>{{ storeCount}}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement" class="button">-</button>
  </p>
</div>
</template>

<script>

export default {
  name: 'CounterPage',
  computed: {
    storeCount () {
      return this.$store.getters.storeCount
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('increment', 5)
    },
    decrement () {
      this.$store.commit('decrement')
    }

  }
}
</script>

<style scoped>
    .button{
        margin-left: 10px;
    }
</style>
