<template>
    <div class='hy-tabs'>
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'hyperTabs',
    data(){
        return {
            eventBus:new Vue()
        } 
    },
    props:{
        seleted:{
            type:String,
            required:true,
        },
        direction:{
            type:String,
            default:'horizontal',
            validator(value){
                return ['horizontal','vertical'].indexOf(value) >= 0
            }
        }
    },
    provide(){
        return {
            eventBus:this.eventBus
        }
    },
    mounted(){
        this.$children.forEach((child)=>{
            if(child.$options.name === 'hyperTabsHead'){
                child.$children.forEach((vm)=>{
                    if(vm.$options.name === 'hyperTabsItem' && vm.name === this.seleted){
                        this.eventBus.$emit('update:selected',this.seleted,vm)
                    }
                })
            }
        })
    }
}
</script>

<style scoped lang="scss">
</style>
