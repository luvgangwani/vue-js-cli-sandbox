import Vue from 'vue'
import App from './App.vue'


import VueResource from 'vue-resource';
import VueRouter from "vue-router";

import Routes from './routes';


Vue.use(VueResource);
Vue.use(VueRouter);

// Routes

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
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

Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
