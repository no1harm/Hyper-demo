<template>
    <div class='hy-toast' ref="toast">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html='$slots.default[0]'></div>
        </div>
        <div class="line" ref="line"></div>
        <span v-if="closeButton" @click="onClickClose" class="close">{{this.closeButton.text}}</span>
    </div>
</template>

<script>
export default {
    name: 'HyToast',
    props:{
        autoClose:{
            type:Boolean,
            default:true
        },
        autoCloseDelay:{
            type:Number,
            default:3
        },
        closeButton:{
            type:Object,
            default(){
                return {
                    text:'关闭',
                    callback:()=>{
                        this.close()
                    }
                }
            }
        },
        enableHtml:{
            type:Boolean,
            default:false
        }
    },
    mounted() {
        this.updateStyle()
        this.execAutoClose()
        
    },
    methods:{
        execAutoClose(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.close()
                },this.autoCloseDelay * 1000)  
            }
        },
        updateStyle(){
            this.$nextTick(()=>{
                this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
            })
        },
        close(){
            this.$el.remove()
            this.$destroy()
        },
        // 点击后销毁组件，并执行用户传入的 callback
        onClickClose(){
            this.close()
            if(this.closeButton && typeof this.closeButton.callback === 'function'){
                this.closeButton.callback()
            }
        }
    }
}
</script>

<style scoped lang="scss">
$font-size:14px;
$toast-min-height:40px;
$toast-bg:rgba(0,0,0,0.75);
.hy-toast{
    font-size: $font-size;
    color:white;
    min-height: $toast-min-height;
    line-height: 1.8;
    padding: 0 16px;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
    .message{
        padding: 8px 0;
    }
    .line{
        height: 100%;
        border-left: 1px solid white;
        margin: 0 1.5em;
    }
    .close{
        flex-shrink: 0;
    }
}
</style>
