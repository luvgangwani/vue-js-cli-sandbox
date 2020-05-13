<template>
    <div v-theme:column="'wide'" id="show-blogs">
        <h2>List All Blog Articles</h2>
        <input type="text" v-model="search" placeholder="Search Blogs" />
        <div class="single-blog" v-bind:key="index" v-for="(blog, index) in filteredBlogs">
            <h3 v-rainbow>{{ blog.title | to-uppercase }}</h3>
        </div>
    </div>
</template>

<script>

import searchMixin from "../mixins/searchMixin";

export default {
    data() {
        return {
            blogs: [],
            search: ''
        }
    },

    computed: {
        
    },

    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {

            this.blogs = data.body.splice(0, 10);
        });
    },

    filters: {
        /* 'to-uppercase': function(value) {
            return value.toUpperCase();
        } */

        toUppercase(value) {
            return value.toUpperCase();
        }
    },

    directives: {
        'rainbow': {
            bind(el, binding, vnode) {
                el.style.color = `#${Math.random().toString().slice(2, 8)}`;
            }
        }
    },
    mixins: [searchMixin]
}
</script>

<style scoped>
    #show-blogs {
        margin: 0px auto;
        max-width: 800px;
    }

    #show-blogs .single-blog {
        background-color: #bbb;
        padding: 20px;
        margin: 20px auto;
        border-radius: 10px;
    }
</style>