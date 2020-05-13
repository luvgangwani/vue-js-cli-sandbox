<template>
  <div>
    <form-template>
      <div slot="form-header">{{ formHeader }}</div>

      <div slot="form-fields">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </div>

      <div slot="form-controls">
        <button type="Submit">Submit</button>
      </div>
    </form-template>
  </div>
</template>

<script>

import formTemplate from './formTemplate';

export default {

  components: {
    'form-template': formTemplate
  },
  data () {
    return {
      formHeader: 'Register'
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>
  
</style>
