<template>
    <button class="hy-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.hy-button{
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover{
        border: 1px solid var(--border-color-hover);
    }
    &:active{
        background: var(--button-active-bg);
    }
    &:focus{
        outline: none;
    }
}
</style>