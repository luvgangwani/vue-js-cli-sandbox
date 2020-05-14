<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>All Blogs</router-link>
            </li>
            <li>
                <router-link to="/add" exact>Add a new blog</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

    data() {
        return {
            
        }
    },
    
    methods: {
        
    },
}
</script>

<style scoped>

nav {
    background-color: #df4848;
    text-align: center;
    color: #ffffff;

}

ul {
    list-style-type: none;
    padding: 25px;
    margin: 0px;
}

li {
    display: inline-block;
    margin: 10px;
}

li a {
    text-decoration: none;
    color : #ffffff;
    padding: 10px;
    border-radius: 10px;
}
    
.router-link-active {
    background-color: #ffffff;
    color: #df4848;
}
</style>