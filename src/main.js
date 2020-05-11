import Vue from 'vue'
import App from './App.vue'
// import Employees from './Employees.vue';

// Vue.component('employees', Employees); // component is globally available for nesting if defined in the main file

export const bus = new Vue(); // initializing event bus

new Vue({
  el: '#app',
  render: h => h(App)
})
