<template>
    <div v-theme:column="'wide'" id="show-blogs">
        <h2>All Blog Articles</h2>
        <div class="single-blog" v-bind:key="index" v-for="(blog, index) in blogs">
            <h3 v-rainbow>{{ blog.title }}</h3>
            <article>{{ blog.body }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: []
        }
    },

    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {

            this.blogs = data.body.splice(0, 10);
        });
    },
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