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
      result: 'This is output.',
      input: 'https://en.wikipedia.org/wiki/List_of_20th-century_writers'
    }
  },
  created () {
    this.getPage('http://localhost:7080')
  },
  methods: {
    getPage: function (inputPage) {
      Vue.axios.get(inputPage)
      .then((response) => {
        console.log('printing response from server')
        console.log(response.data)
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
