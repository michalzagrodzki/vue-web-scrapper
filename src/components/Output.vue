<template>
  <div>
    <p>{{ result }}</p>
  </div>
</template>

<script>

export default {
  name: 'Output',
  data () {
    return {
      result: 'This is output.'
    }
  },
  methods: {
    getPage: function () {
      Vue.axios.get('https://www.google.no')
      .then((response) => {
        this.result = response
      })
      .catch((error) => {
        console.log('oh no, error:')
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
