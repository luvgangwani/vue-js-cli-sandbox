<template>
    <div class="employee-list">
        <ul>
            <li v-for="eachEmployee in employees" v-on:click="eachEmployee.show = !eachEmployee.show">
                <h4>{{ eachEmployee.name }}</h4>
                <p v-if="eachEmployee.show">{{ eachEmployee.speciality }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
// Reference types - change in one component is reflected in the other - Objects, Arrays

// Value types - Changes in one component is not reflected in the other - Strings, Booleans and Numbers

export default {

    props: {
        employees: {
            type: Array,
            required: true
        }
    },

    data() {
        return {

        };
    },

    beforeCreate() {
        alert('beforeCreate');
    },

    created() {
        alert('created');
    },

    beforeMount() {
        alert('beforeMount');
    },

    mounted() {
        alert('mounted');
    },

    beforeUpdate() {
        alert('beforeUpdate');
    },

    updated() {
        alert('updated');
    },

}
</script>

<style scoped>

    .employee-list {
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0px auto;
        box-sizing: border-box;
        text-align: center;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        padding: 0px;  
    }

    li {
        padding: 20px;
        border: 1px solid #000000;
        width: 200px;
        height: 100px;
        list-style: none;
        margin: 10px;
        flex-basis: 300px;
    }
</style>