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
        this.eventBus.$emit('update:selected',this.seleted)
        // this.eventBus.$on('update:selected',name =>{
        //     this.$emit('update:seleted',name)
        // })
    }
}
</script>

<style scoped lang="scss">
</style>
