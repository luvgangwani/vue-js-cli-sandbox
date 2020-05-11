<template>
    <div class="header">
        <header>{{ header }}</header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            header: 'Employee List'
        }
    }
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