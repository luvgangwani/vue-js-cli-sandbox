<template>
    <div id="add-blog">
        <h2>Add a new blog</h2>
        <form v-if="!submitted">
            <label for="title">Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required>
            <label for="content">Blog Content:</label>
            <textarea name="content" v-model.lazy="blog.content" id=""></textarea>
            <div id="categories">
                <label for="tech">Tech</label>
                <input type="checkbox" name="" id="" value="tech" v-model="blog.categories">
                <label for="philosophy">Philosophy</label>
                <input type="checkbox" name="" id="" value="philosophy" v-model="blog.categories">
                <label for="climate">Climate</label>
                <input type="checkbox" name="" id="" value="climate" v-model="blog.categories">
                <label for="mythology">Mythology</label>
                <input type="checkbox" name="" id="" value="mythology" v-model="blog.categories">
            </div>
            <select name="" id="" v-model="blog.author">
                <option v-bind:key="index" v-for="(author, index) in authors">{{ author }}</option>
            </select>
            <button v-on:click.prevent="addNewBlog">Add new blog</button>
        </form>

        <div v-if="submitted">
            <h3>Thanks for adding a new blog post!</h3>
        </div>

        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog Title: {{ blog.title }}</p>
            <p>Blog Content:</p>
            <p>{{ blog.content }}</p>
            <p>Categories:</p>
            <ul>
                <li v-bind:key="index" v-for="(category, index) in blog.categories">{{ category }}</li>
            </ul>
            <p>Author: {{ blog.author }}</p>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: [
                'Atom',
                'White Canary',
                'Mr. Steele'
            ],
            submitted: false
        }
    },

    methods: {
        addNewBlog: function() {
            this.$http.post('https://vue-js-cli-sandbox.firebaseio.com/posts.json', this.blog).then(function(data) {
                console.log(data);
                this.submitted = true;
            });
        }
    },
}
</script>

<style scoped>
    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog{
        margin: 20px auto;
        max-width: 500px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea{
        display: block;
        width: 100%;
        padding: 8px;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }
    #categories input {
        display: inline-block;
        margin-right: 10px;
    }
    #categories label {
        display: inline-block;
    }
</style>