<template>
    <div class='hy-tabs-item' @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'hyperTabsItem',
    inject:['eventBus'],
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
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
        xxx(){
            this.eventBus.$emit('update:selected',this.name)
        }
    }   
}
</script>

<style scoped lang="scss">
</style>
