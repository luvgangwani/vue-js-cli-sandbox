<template>
    <div v-theme:column="'wide'" id="show-blogs">
        <h2>All Blog Articles</h2>
        <input type="text" v-model="search" placeholder="Search Blogs" />
        <div class="single-blog" v-bind:key="index" v-for="(blog, index) in filteredBlogs">
            <router-link v-bind:to="`/blog/${blog.id}`" target="_blank"><h3>{{ blog.title | to-uppercase }}</h3></router-link>
            <article>{{ blog.content | snippet }}</article>
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
        this.$http.get('https://vue-js-cli-sandbox.firebaseio.com/posts.json')
        .then(function(data) {
            return data.json();
        })
        .then(function(data) {
            const blogsArray = [];

            for (const key in data) {
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            
            this.blogs = blogsArray;
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
        margin: 20px auto;
        max-width: 800px;
        border-radius: 10px;
    }

    #show-blogs .single-blog {
        background-color: #bbb;
        padding: 20px;
        margin: 20px auto;
        border-radius: 10px;
    }

    #show-blogs .single-blog a {
        text-decoration: none;
    }
</style>