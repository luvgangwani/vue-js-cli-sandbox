<template>
  <div>
      <component v-bind:is="component"></component>
      <button type="button" v-on:click="component = 'register'">Register</button>
      <button type="button" v-on:click="component = 'login'">Login</button>

  </div>
</template>

<script>

import register from './components/Register';
import login from './components/Login';

export default {

  components: {
    register,
    login
  },
  data () {
    return {
      component: 'register'
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>
  
</style>
