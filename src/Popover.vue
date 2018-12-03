<template>
    <div class='hyper-popover' @click.stop="showPopover">
        <div class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'hyperPopover',
    data() {
      return {
          visible:false
      }
    },
    methods:{
        showPopover(){
            this.visible = !this.visible
            if(this.visible === true){
                this.$nextTick(()=>{
                    let eventHandler = () =>{
                        this.visible = false
                        document.removeEventListener('click',eventHandler)
                    }
                    document.addEventListener('click',eventHandler)
                })

            }
        }
    }
}
</script>

<style scoped lang="scss">
.hyper-popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper{
        background-color: #fff;
        border:1px solid #999;
        border-radius: 4px;
        position: absolute;
        bottom:100%;
        left:0;
        margin-bottom: 8px;
        padding: 6px;
    }
}
</style>
