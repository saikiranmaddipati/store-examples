<template>
  <div class="home">
    <CounterPage />
  </div>
</template>

<script>
// @ is an alias to /src
import CounterPage from '../components/Counter'

export default {
  name: 'HomeView',
  components: {
    CounterPage
  }
}
</script>
