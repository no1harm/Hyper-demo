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
        this.eventBus.$on('update:selected',(name)=>{
            if(name === this.name){
                this.active = true
                console.log(`我${this.name}被选中了`)
            }else{
                console.log(`我${this.name}没被选中了`)
                this.active = false
            }
        })
    },
    methods:{
        xxx(){
            this.eventBus.$emit('update:selected',this.name)
        }
    }   
}
</script>

<style scoped lang="scss">
.hy-tabs-item{
    border: 1px solid green;
    display: flex;
    align-items: center;
    padding: .4em 1em;
    flex-shrink: 0;
    &.current-tabs-item{
        background-color:red;
    }
}
</style>
