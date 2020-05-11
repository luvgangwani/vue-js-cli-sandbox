<template>
  <div id="app">
    <app-header></app-header>
    <app-content v-bind:employees="employees"></app-content>
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
      employees: [
          {
              name: 'Test One',
              speciality: 'Speciality One',
              show: false
          },
          {
              name: 'Test Two',
              speciality: 'Speciality Two',
              show: false
          },
          {
              name: 'Test Three',
              speciality: 'Speciality Three',
              show: false
          },
          {
              name: 'Test Four',
              speciality: 'Speciality Four',
              show: false
          },
          {
              name: 'Test Five',
              speciality: 'Speciality Five',
              show: false
          },
          {
              name: 'Test Six',
              speciality: 'Speciality Six',
              show: false
          },
      ]
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>
  
</style>
