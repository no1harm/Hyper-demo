<template>
    <div class='hy-tabs-item' @click="selectTab" :class="TabsItem">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'hyperTabsItem',
    inject:['eventBus'],
    data(){
        return {
            active:false
        }
    },
    computed:{
        TabsItem(){
            return {
                [`current-tabs-item`]:this.active,
                [`tabs-item-disabled`]:this.disabled
            }
        }
    },
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
        name:{
            type:[Number,String],
            required:true
        }
    },
    created(){
        this.eventBus.$on('update:selected',(name,vm)=>{
            if(name === this.name){
                this.active = true
            }else{
                this.active = false
            }
        })
    },
    methods:{
        selectTab(){
            if(this.disabled){return}
            this.eventBus.$emit('update:selected',this.name,this)
        }
    }   
}
</script>

<style scoped lang="scss">
$tab-item-current-color:blue;
$tab-item-color:#333;
.hy-tabs-item{
    display: flex;
    align-items: center;
    padding: .4em 1em;
    flex-shrink: 0;
    font-weight: bold;
    color: $tab-item-color;
    cursor: pointer;
    &.current-tabs-item{
        color: $tab-item-current-color;
        font-weight: bold;
        vertical-align: top;
    }
    &.tabs-item-disabled{
        color:#999;
        cursor: not-allowed;
    }
}
</style>
