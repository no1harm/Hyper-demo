<template>
    <div class='hy-tabs-head'>
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
export default {
    name: 'hyperTabsHead',
    inject:['eventBus'],
    props:{
        // name:{
        //     type:[Number,String],
        //     required
        // }
    },
    created(){
        // console.log(this.eventBus)
    }
}
</script>

<style scoped lang="scss">
</style>
