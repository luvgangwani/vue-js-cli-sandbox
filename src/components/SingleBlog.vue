<template>
    <div id="single-blog">
        <h2>{{ blog.title }}</h2>
        <article>{{ blog.content }}</article>
        <p>Author: {{ blog.author }}</p>
        <p>Categories:</p>
        <ul>
            <li v-bind:key="index" v-for="(category, index) in blog.categories">{{ category }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },

    created() {
        this.$http.get(`https://vue-js-cli-sandbox.firebaseio.com/posts/${this.id}.json`)
        .then(function(data){
            this.blog = data.body
        });
    },

}
</script>

<style scoped>
    #single-blog {
        max-width: 800px;
        margin: 50px auto;
    }
</style>