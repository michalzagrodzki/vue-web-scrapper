<template>
  <div>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Output',
  data () {
    return {
      result: 'This is output.'
    }
  },
  created () {
    this.getPage('https://en.wikipedia.org/wiki/List_of_20th-century_writers')
  },
  methods: {
    getPage: function (inputPage) {
      Vue.axios.get(inputPage)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log('error in response:')
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
