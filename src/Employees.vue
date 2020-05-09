<template>
    <div>
        <ul>
            <li v-for="eachEmployee in employees">{{ eachEmployee }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            employees: ['Test One', 'Test Two', 'Test Three']
        };
    }

}
</script>>