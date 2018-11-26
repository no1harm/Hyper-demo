<template>
    <div class='row' :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'HyRow',
    props:{
        gutter:{
            type:[Number,String]}
    },
    mounted(){
        this.$children.forEach((vm)=>{
            vm.gutter = this.gutter
        })
    },
    computed:{
        rowStyle(){
            return {
                marginLeft:-this.gutter/2+'px',
                marginRight:-this.gutter/2+'px'
                }
        }
    }
}
</script>

<style scoped lang="scss">
.row{
    display: flex;
}
</style>
