<template>
    <div class='hyper-popover' @click="showPopover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${this.position}`]:true}">
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
    props:{
        position:{
              type:String,
              default:'top',
              validator(value){
                  return ['top','bottom','left','right'].indexOf(value) >= 0 
              }
          }
    },
    data() {
      return {
          visible:false,
      }
    },
    methods:{
        positionContent(){
            const {contentWrapper,triggerWrapper} = this.$refs
            document.body.appendChild(contentWrapper) 
            let {width,height,left,top} = triggerWrapper.getBoundingClientRect()
            let {height:contentHeight} = contentWrapper.getBoundingClientRect()
            let positions = {
                top:{
                    top:top + window.scrollY,
                    left:left + window.screenX,
                },
                bottom:{
                    top:top + height + window.scrollY,
                    left:left + window.screenX
                },
                left:{
                    top:top + window.scrollY + (height - contentHeight)/2,
                    left:left + window.screenX
                },
                right:{
                    top:top + window.scrollY + (height - contentHeight)/2,
                    left:left + width + window.screenX
                }
            }
            contentWrapper.style.top = positions[this.position].top + 'px'
            contentWrapper.style.left = positions[this.position].left + 'px'
        },
        eventHandler(e){
            if( this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))){return}
            if( this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))){return}
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
    max-width: 20em;
    word-wrap:break-word;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
    &::before,&::after{
        content:'';
        width:0;
        height: 0;
        border: 8px solid transparent;
        position: absolute;
    }
    &.position-top{
        margin-top: -10px;
        transform: translateY(-100%);
        &::before,&::after{
            left:10px;
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
    &.position-bottom{
        margin-top: 10px;
        &::before,&::after{
            left:10px;
        }
        &::before{
            border-bottom-color: #999;
            bottom: 100%;
        }
        &::after{
            border-bottom-color: white;
            bottom: calc(100% - 1px);
        }
    }
    &.position-left{
        transform: translateX(-100%);
        margin-left: -10px;
        &::before,&::after{
            top:50%;        
            transform: translateY(-50%)
        }
        &::before{
            left:100%;
            border-left-color: #999;
        }
        &::after{
            border-left-color: white;
            left: calc(100% - 1px);
        }
    }
    &.position-right{
        margin-left: 10px;
        &::before,&::after{
            top:50%;        
            transform: translateY(-50%)
        }
        &::before{
            right:100%;
            border-right-color: #999;
        }
        &::after{
            border-right-color: white;
            right: calc(100% - 1px);
        }
    }
}
</style>
