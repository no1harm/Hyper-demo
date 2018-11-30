<template>
    <div class='hy-tabs-item' @click="xxx" :class="TabsItem">
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
                [`current-tabs-item`]:this.active
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
        xxx(){
            this.eventBus.$emit('update:selected',this.name,this)
        }
    }   
}
</script>

<style scoped lang="scss">
$tab-item-current-color:blue;
$tab-item-color:#666;
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
}
</style>
