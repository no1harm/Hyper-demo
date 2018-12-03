<template>
    <div class='hyper-popover' @click.stop="showPopover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" >
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
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
                    document.body.appendChild(this.$refs.contentWrapper) 
                    let {width,height,left,top} = this.$refs.triggerWrapper.getBoundingClientRect()
                    this.$refs.contentWrapper.style.left = left + 'px'
                    this.$refs.contentWrapper.style.top = top + window.scrollY +'px'
                    console.log(window.scrollY)
                    let eventHandler = () =>{
                        this.visible = false
                        document.removeEventListener('click',eventHandler)
                    }
                    document.addEventListener('click',eventHandler)
                })

            }
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped lang="scss">
.hyper-popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper{
    background-color: #fff;
    border:1px solid #999;
    border-radius: 4px;
    position: absolute;
    margin-bottom: 8px;
    padding: 6px;
    transform: translateY(-140%)
}
</style>
