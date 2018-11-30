<template>
    <div class='hy-tabs-pane' :class="tabsPane" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'hyperTabsPane',
    inject:['eventBus'],
    data(){
        return{
            active:false
        }
    },
    props:{
        name:{
            type:[Number,String],
            required:true
        }
    },
    computed:{
        tabsPane(){
            return {
                [`current-tabs-pane`]:this.active
            }
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
    }   
}
</script>

<style scoped lang="scss">
.current-tabs-pane{
    padding: 1em;
}
</style>
