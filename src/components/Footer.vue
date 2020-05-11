<template>
    <div class="footer">
        <footer>&copy; {{ footer }}</footer>
    </div>
</template>

<script>

import { bus } from '../main';

export default {
    data() {
        return {
            footer: 'Copyright 2020'
        }
    },

    created() {

        bus.$on('changeHeader', (data) => {
            this.footer = `${this.footer} ${data}`;
        });
    }
}
</script>

<style>
.footer {
    background: #222;
    color: cyan;
    text-align: center;
    padding: 50px;
}
</style>