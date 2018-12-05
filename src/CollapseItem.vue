<template>
    <div class='hyper-collapse-item' @click="toggle">
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
        name:{
            type:String
        }
    },
    inject:['eventBus'],
    data() {
      return {
        open:false,
      }
    },
    mounted(){
        this.eventBus && this.eventBus.$on('update:selected',(names)=>{
            if(names.indexOf(this.name) >= 0){
                this.open = true
            }else{
                this.open = false
            }
        })
    },
    methods:{
        toggle(){
            if(this.open){
                this.eventBus && this.eventBus.$emit('update:removeSelected',this.name)
            }else{
                this.eventBus && this.eventBus.$emit('update:addSelected',this.name)
            }
        },
    }
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
