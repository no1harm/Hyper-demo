<template>
    <div class='hyper-popover' @click="showPopover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
        positionContent(){
            document.body.appendChild(this.$refs.contentWrapper) 
            let {width,height,left,top} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left + 'px'
            this.$refs.contentWrapper.style.top = top + window.scrollY +'px'
        },
        ListenToDocument(){
            let eventHandler = (e) =>{
                if(!this.$refs.contentWrapper.contains(e.target)){
                    this.visible = false
                    document.removeEventListener('click',eventHandler)
                }
            }
            document.addEventListener('click',eventHandler)
        },
        onShow(){
            this.$nextTick(()=>{
                this.positionContent()
                this.ListenToDocument()
            })
        },
        showPopover(event){
            if(this.$refs.triggerWrapper.contains(event.target)){
                this.visible = !this.visible
                if(this.visible === true){
                this.onShow()
                }
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
