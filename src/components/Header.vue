<template>
    <div class="header">
        <header v-on:click="changeHeader()">{{ header }}</header>
    </div>
</template>

<script>
export default {

    props: {
        header: {
            type: String
        }
    },
    
    data() {
        return {
            
        }
    },
    
    methods: {
        changeHeader: function() {
            this.$emit('changeHeader', 'Employees Names'); // first parameter does not have to be the same as the function name (object key)
        }
    },
}
</script>

<style scoped>
.header {
    padding: 120px;
    text-align: center;
    background-color: cyan;
    font-weight: bold;
    font-size: 40px;
}
</style>