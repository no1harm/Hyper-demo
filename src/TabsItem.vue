<template>
    <div class='hy-tabs-item'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'hyperTabsItem',
    props:{
        disabled:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped lang="scss">
</style>
