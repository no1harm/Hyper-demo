<template>
    <div class='hy-layout' :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'hyperLayout',
    data() {
      return {
          layoutClass:{
              hasSider:false
          }
      }
    },
    components: {
    },
    mounted() {
        this.$children.forEach((child)=>{
            if(child.$options.name === 'hyperSider'){
                this.layoutClass.hasSider = true
            }      
        })
    },
}
</script>

<style scoped lang="scss">
.hy-layout{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasSider{
        flex-direction: row;
    }
}
</style>
