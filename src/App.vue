<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ greetings() }}</p>
    <employees></employees>
  </div>
</template>

<script>
import Employees from './Employees.vue';

export default {
  components: {
    'employees': Employees
  },
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

<style scoped>
  h1 {
    color: blue;
  }
</style>
