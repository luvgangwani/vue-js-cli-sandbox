<template>
  <div>
      <router-view></router-view>
  </div>
</template>

<script>

import addBlog from "./components/AddBlog";
import showBlogs from './components/ShowBlogs';
import listBlogs from './components/ListBlogs';

export default {

  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs
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
