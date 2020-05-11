<template>
  <div id="app">
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Employees from './components/Employees.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-content': Employees,
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>
  
</style>
