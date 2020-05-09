<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ greetings() }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Vue JS Using CLI'
    }
  },
  methods: {
    greetings() {
      return 'Welcome to the first Vue JS application created using CLI';
    }
  },
}
</script>

<style>

</style>
