<template>
    <div class='hy-tabs-pane'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'hyperTabsPane',
    inject:['eventBus'],
    props:{
        name:{
            type:[Number,String],
            required:true
        }
    },
    created(){
        this.eventBus.$on('update:selected',(name)=>{
            console.log(name)
        })
    },
    methods:{
    }   
}
</script>

<style scoped lang="scss">
</style>
