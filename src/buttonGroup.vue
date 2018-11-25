<template>
    <div class="hy-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"hyperButtonGroup",
    mounted(){
        for (let node of this.$el.children) {
            let name = node.nodeName.toLowerCase()
            if(name !== 'button'){
                console.log(`hy-button-group 的子元素应该全是 hy-button，但你写的是${name}`)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.hy-button-group{
    display: inline-flex;
    vertical-align: middle;
    .hy-button{
        border-radius: 0;
        &:not(:first-child){
            margin-left:-1px;
        }
        &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
        &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
        &:hover{
            position: relative;
            z-index: 1;
        }
    }
}
</style>
