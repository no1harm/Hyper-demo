<template>
    <div class='hy-tabs'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'hyperTabs',
    props:{
        seleted:{
            type:String,
            required:true,
        },
        direction:{
            type:String,
            default:'horizontal',
            validator(value){
                return ['horizontal','vertical'].indexOf(value) >= 0
            }
        }
    },
    created(){
        // this.$emit('update:seleted','tab2')
    }
}
</script>

<style scoped lang="scss">
</style>
