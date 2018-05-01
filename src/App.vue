<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Input from './components/Input.vue'
import Output from './components/Output.vue'

export default {
  name: 'app',
  components: {
    Input, Output
  }
}
</script>

<style>

</style>
