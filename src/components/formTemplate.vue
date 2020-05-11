<template>
    <div>
        <form>
            <div class="form-header">
                <h2>
                    <slot name="form-header"></slot>
                </h2>
            </div>
            <div class="form-fields">
                <slot name="form-fields"></slot>
            </div>
            <div class="form-controls">
                <slot name="form-controls"></slot>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoeped>
    
</style>