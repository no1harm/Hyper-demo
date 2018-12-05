<template>
    <div class='hyper-collapse-item' @click="open=!open">
        <div class="title">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hyperCollapseItem',
    props:{
        title:{
            type:String,
            required:true
        },
        open:{
            type:Boolean,
            default:false
        }
    },
    data() {
      return {

      }
    },
}
</script>

<style scoped lang="scss">
$grey:#999;
$border-radius:4px;
.hyper-collapse-item{
    .title{
        border: 1px solid $grey;
        padding: 0 8px;
        min-height: 32px;
        display: flex;
        align-items: center;
        margin-top: -1px;
        margin-left: -1px;
        margin-bottom: -1px;
        margin-right: -1px;
    }
    &:first-child{
        .title{
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }
    }
    &:last-child{
        .title:last-child{
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
    }
    .content{
        padding: 8px;
    }
}
</style>
