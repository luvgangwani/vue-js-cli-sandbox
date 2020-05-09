<template>
    <div>
        <h1>{{ title }}</h1>
        <ul>
            <li v-for="eachEmployee in employees">{{ eachEmployee }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            title: 'Employee List',
            employees: ['Test One', 'Test Two', 'Test Three']
        };
    }

}
</script>

<style scoped>
    h1 {
        color: green;
    }
</style>