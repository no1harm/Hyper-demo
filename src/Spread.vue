<template>
    <transition  
        @before-enter="beforeEnter" 
        @enter="enter" 
        @after-enter="afterEnter" 
        @before-leave="beforeLeave" 
        @leave="leave" 
        @after-leave="afterLeave">
        <slot></slot>
    </transition >
</template>

<script>
    export default {
        name:"hyperSpread",
        props:{
            duration:{
                type:[Number,String],
                default:'500'
            }
        },
        data(){
            return {
                
            }
        },
        computed:{
                elTransition(){
                    return `${this.duration}ms height ease-in-out, ${this.duration}ms padding-top ease-in-out, ${this.duration}ms padding-bottom ease-in-out`
                } 
        },
        methods:{
            beforeEnter(el){
                el.style.transition = this.elTransition
                if (!el.dataset) el.dataset = {}

                el.dataset.oldPaddingTop = el.style.paddingTop
                el.dataset.oldPaddingBottom = el.style.paddingBottom

                el.style.height = 0
                el.style.paddingTop = 0
                el.style.paddingBottom = 0
            },
            enter(el){
                el.dataset.oldOverflow = el.style.overflow
                if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + 'px'
                el.style.paddingTop = el.dataset.oldPaddingTop
                el.style.paddingBottom = el.dataset.oldPaddingBottom
                } else {
                el.style.height = ''
                el.style.paddingTop = el.dataset.oldPaddingTop
                el.style.paddingBottom = el.dataset.oldPaddingBottom
                }

                el.style.overflow = 'hidden'
            },
            afterEnter(el){
                el.style.transition = ''
                el.style.height = ''
                el.style.overflow = el.dataset.oldOverflow
            },
            beforeLeave(el){
                if (!el.dataset) el.dataset = {}
                el.dataset.oldPaddingTop = el.style.paddingTop
                el.dataset.oldPaddingBottom = el.style.paddingBottom
                el.dataset.oldOverflow = el.style.overflow

                el.style.height = el.scrollHeight + 'px'
                el.style.overflow = 'hidden'
            },
            leave(el){
                if (el.scrollHeight !== 0) {
                    el.offsetHeight
                    el.style.transition = this.elTransition
                    el.style.height = 0
                    el.style.paddingTop = 0
                    el.style.paddingBottom = 0
                }
            },
            afterLeave(el){
                el.style.transition = ''
                el.style.height = ''
                el.style.overflow = el.dataset.oldOverflow
                el.style.paddingTop = el.dataset.oldPaddingTop
                el.style.paddingBottom = el.dataset.oldPaddingBottom
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>
