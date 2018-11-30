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
        this.eventBus.$on('update:selected',(name)=>{
            if(name === this.name){
                this.active = true
                console.log(`我 pane${this.name}被选中了`)
            }else{
                console.log(`我 pane${this.name}没被选中了`)
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
    background-color: red;
}
</style>
