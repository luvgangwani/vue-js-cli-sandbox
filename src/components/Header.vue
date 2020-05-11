<template>
    <div class="header">
        <header v-on:click="changeHeader()">{{ header }}</header>
    </div>
</template>

<script>

import { bus } from '../main';

export default {
    
    data() {
        return {
            header: 'Employees List'
        }
    },
    
    methods: {
        changeHeader: function() {
            // this.$emit('changeHeader', 'Employees Names'); // first parameter does not have to be the same as the function name (object key)

            const updatedTitle = 'Employees Names';

            this.header = updatedTitle;

            // event buses are used to change data in sibling components (whereas events are used between child and parent components)

            bus.$emit('changeHeader', updatedTitle);
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