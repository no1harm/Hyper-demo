<template>
    <div class='row' :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'HyRow',
    props:{
        gutter:{
            type:[Number,String]
        },
        align:{
            type:String,
            validator(value){
                return ['left','right','center'].includes(value)
            }
        }

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
        },
        rowClass(){
            let {align} = this
            return [align && `align-${align}`]
        }
    }
}
</script>

<style scoped lang="scss">
.row{
    display: flex;
    flex-wrap: wrap;
    &.align-left{
        justify-content: flex-start;
    }
    &.align-right{
        justify-content: flex-end;
    }
    &.align-center{
        justify-content: center;
    }
}
</style>
