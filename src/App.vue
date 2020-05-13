<template>
  <div>
      <!-- <add-blog></add-blog> -->
      <show-blogs></show-blogs>
  </div>
</template>

<script>

import addBlog from "./components/AddBlog";
import showBlogs from './components/ShowBlogs';

export default {

  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs
  },
  data () {
    return {

    }
  },
  methods: {
    
  },
}
</script>

<style>

body{
    margin: 0;
    font-family: 'sans-serif';
}
  
</style>
