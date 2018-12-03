<template>
    <div class='hyper-popover' @click="showPopover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block">
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
        eventHandler(e){
            if( this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))){return}
            this.close()
        },
        close(){
            this.visible = false
            document.removeEventListener('click',this.eventHandler)
        },
        open(){
            this.visible = true
            this.$nextTick(()=>{
                this.positionContent()
                document.addEventListener('click',this.eventHandler)
            })
        },
        showPopover(event){
            if(this.$refs.triggerWrapper.contains(event.target)){
                if(this.visible === true){
                    this.close()
                }else{
                    this.open()
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
    padding: .5em 1em;
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,&::after{
        content:'';
        width:0;
        height: 0;
        border: 8px solid transparent;
        position: absolute;
    }
    &::before{
        border-top-color: #999;
        top: 100%;
    }
    &::after{
        border-top-color: white;
        top: calc(100% - 1px);
    }
}
</style>
