<template>
    <div class="footer">
        <footer>&copy; {{ footer }}</footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footer: 'Copyright 2020'
        }
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