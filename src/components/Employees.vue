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
export default {
    
    data() {
        return {
            employees: [
                {
                    name: 'Test One',
                    speciality: 'Speciality One',
                    show: false
                },
                {
                    name: 'Test Two',
                    speciality: 'Speciality Two',
                    show: false
                },
                {
                    name: 'Test Three',
                    speciality: 'Speciality Three',
                    show: false
                },
                {
                    name: 'Test Four',
                    speciality: 'Speciality Four',
                    show: false
                },
                {
                    name: 'Test Five',
                    speciality: 'Speciality Five',
                    show: false
                },
                {
                    name: 'Test Six',
                    speciality: 'Speciality Six',
                    show: false
                },
            ]
        };
    }

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