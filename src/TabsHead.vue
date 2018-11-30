<template>
    <div class='hy-tabs-head'>
        <slot></slot>
        <div class="line" ref='line'></div>
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
            let {width,height,top,left} = vm.$el.getBoundingClientRect()
            console.log(left)
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.transform = `translateX(${left-20}px)`
        })
    },
}
</script>

<style scoped lang="scss">
$tab-item-current-color:blue;
$tab-height:40px;
.hy-tabs-head{
    min-height: $tab-height;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    .actions{
        margin-left: auto;
    }
    > .line{
        position: absolute;
        bottom: 0;
        border-bottom: 1px solid $tab-item-current-color;
        transition: all .3s;
    }
}
</style>
