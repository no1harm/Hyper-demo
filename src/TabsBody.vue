<template>
    <div class='hy-tabs-body'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'hyperTabsBody',
    inject:['eventBus'],
    props:{
        // name:{
        //     type:[Number,String],
        //     required
        // }
    },
    created(){
    },
    methods:{
    }   
}
</script>

<style scoped lang="scss">
</style>
