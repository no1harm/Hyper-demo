<template>
    <div class='hyper-collapse'>
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'hyperCollapse',
    data() {
      return {
          eventBus:new Vue()
      }
    },
    props:{
        single:{
            type:Boolean,
            default:false
        },
        selected:{
            type:String
        }
    },
    provide(){
        if(this.single){
            return {eventBus:this.eventBus}
        }
    },
    mounted(){
        this.eventBus.$emit('update:selected',this.selected)
    }
}
</script>

<style scoped lang="scss">
$border-color:#999;
.hyper-collapse{
    border-radius: 4px;
    border: 1px solid $border-color;
}
</style>
