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
        }
    },
    provide(){
        if(this.single){
            return {eventBus:this.eventBus}
        }
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
