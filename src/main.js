import Vue from 'vue'
import App from './App.vue'
// import Employees from './Employees.vue';

import VueResource from 'vue-resource';

// Vue.component('employees', Employees); // component is globally available for nesting if defined in the main file

export const bus = new Vue(); // initializing event bus

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
