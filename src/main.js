import Vue from 'vue'
import App from './App.vue'
// import Employees from './Employees.vue';

import VueResource from 'vue-resource';

// Vue.component('employees', Employees); // component is globally available for nesting if defined in the main file

export const bus = new Vue(); // initializing event bus

Vue.use(VueResource);

// Custom Directives

Vue.directive('rainbow', function(el, binding, vnode) {

  el.style.color = `#${Math.random().toString().slice(2, 8)}`;

});

Vue.directive('theme', function(el, binding, vnode) {
  if (binding.value == 'wide') {
    el.style.maxWidth = '1200px';
  }
  else if (binding.value == 'medium') {
    el.style.maxWidth = '800px';
  }
  else if (binding.value == 'narrow') {
    el.style.maxWidth = '560px';
  }

  if (binding.arg == 'column') {
    el.style.backgroundColor = '#ddd';
    el.style.padding = '20px';
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
