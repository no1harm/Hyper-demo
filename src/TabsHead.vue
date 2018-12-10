<template>
    <div class='hy-tabs-head'>
        <div class="title-wrapper" ref="titleWrapper">
            <slot></slot>
            <div class="line" ref='line'></div>
        </div>
        <div class="actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hyperTabsHead',
    inject:['eventBus'],
    props:{
    },
    mounted(){
        this.eventBus.$on('update:selected',(name,vm)=>{
            let line = this.$refs.line;
            let { left, right, top, height } = vm.$el.getBoundingClientRect();
            let { left: wrapperLeft,top: wrapperTop,height: wrapperHeight } = this.$refs.titleWrapper.getBoundingClientRect()
            line.style.width = right - left + 'px'
            line.style.bottom = -4 +'px'
            line.style.left = left - wrapperLeft + 'px'
        })
    },
}
</script>

<style scoped lang="scss">
$tab-item-current-color:#337480;
$tab-height:40px;
$head-boder:#ddd;
.hy-tabs-head{
    min-height: $tab-height;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid $head-boder;
    .actions{
        margin-left: auto;
    }
    >.title-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        >.line {
            position: absolute;
            bottom: 0;
            transition: all 0.3s linear;
            border-bottom: 3px solid $tab-item-current-color;
        }
    }
}
</style>
