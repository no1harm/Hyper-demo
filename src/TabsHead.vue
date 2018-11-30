<template>
    <div class='hy-tabs-head'>
        <slot></slot>
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
        // name:{
        //     type:[Number,String],
        //     required
        // }
    },
    created(){
        // console.log(this.eventBus)
    }
}
</script>

<style scoped lang="scss">
$tab-height:40px;
.hy-tabs-head{
    height: $tab-height;
    border: 1px solid red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .actions{
        margin-left: auto;
    }
}
</style>
