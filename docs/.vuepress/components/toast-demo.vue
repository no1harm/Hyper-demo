<template>
    <div class="contentWrapper">
        <div class="componentsMessage">
            <hy-button @click="callToast">点击</hy-button>
            <hy-spread>
            <pre v-if="showCode"><code>{{content}}</code></pre>
            </hy-spread>
        </div>
        <div class="dispalyCode" @click="showCode=!showCode">▼ <span clas="showSpan">显示代码</span></div>
    </div>
</template>

<script>
    import Button from '../../../src/Button.vue'
    import plugin from './plugin.js'
    import Vue from 'vue'
    import Spread from '../../../src/Spread.vue'

    Vue.use(plugin)
    export default {
        name:"toast",
        components:{
            'hy-button': Button,
            'hy-spread':Spread
        },
        methods:{
            callToast(){
                this.$toast({
                    message:'2S 后自动关闭',
                    closeButton:{
                    text:'Close',
                    callback(){
                        console.log('Closed')
                    }
                },
                enableHtml:true,
                autoClose:2,
                position:'middle',
                })
            }
        },
        data(){
            return {
                seletedTab:'tab1',
                content:
`
<hy-button @click="callToast">点击</hy-button>

<script>
import { toastPlugin } from 'hyper-youi'
Vue.use(plugin)
...
methods:{
    callToast(){
        this.$toast({
            message:'2S 后自动关闭',
            closeButton:{
            text:'Close',
            callback(){
                console.log('Closed')
            }
        },
        enableHtml:true,
        autoClose:2,
        position:'middle',
        })
    }
},
...
<script>
`.trim(),
                showCode:false
            }
        }
    }
</script>

<style lang="scss" scoped>
@import './main.scss';
.header{
    background-color: $bg-yellow;
    min-height: 40px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    text-align: center;
    line-height: 40px;
}
.layout-content{
    background-color: $bg-blue;
    min-height: 140px;
    text-align: center;
    line-height: 140px;
    color:#fff;
}
.footer{
    text-align: center;
    background-color: $bg-yellow;
    min-height: 40px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    line-height: 40px;
}
</style>
