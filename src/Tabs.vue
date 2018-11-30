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
    created(){
        this.eventBus.$on('update:selected',(name)=>{console.log(name)})
    }
}
</script>

<style scoped lang="scss">
</style>
