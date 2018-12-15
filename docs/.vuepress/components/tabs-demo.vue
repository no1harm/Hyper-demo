<template>
    <div class="contentWrapper">
        <div class="componentsMessage">
            <hy-tabs :seleted.sync="seletedTab">
                <hy-tabs-head>
                    <template slot="actions">
                        <hy-button>点击</hy-button>
                    </template>
                    <hy-tabs-item name="tab1" >tab1</hy-tabs-item>
                    <hy-tabs-item name="tab2":disabled="true">tab2</hy-tabs-item>
                    <hy-tabs-item name="tab3">tab3</hy-tabs-item>
                </hy-tabs-head>
                <hy-tabs-body>
                    <hy-tabs-pane name="tab1">content1</hy-tabs-pane>
                    <hy-tabs-pane name="tab2">content2</hy-tabs-pane>
                    <hy-tabs-pane name="tab3">content3</hy-tabs-pane>
                </hy-tabs-body>
            </hy-tabs>
            <hy-spread>
            <pre v-if="showCode"><code>{{content}}</code></pre>
            </hy-spread>
        </div>
        <div class="dispalyCode" @click="showCode=!showCode">▼ <span clas="showSpan">显示代码</span></div>
    </div>
</template>

<script>
    import Tabs from '../../../src/Tabs.vue'
    import TabsHead from '../../../src/TabsHead.vue'
    import TabsBody from '../../../src/TabsBody.vue'
    import TabsItem from '../../../src/TabsItem.vue'
    import TabsPane from '../../../src/TabsPane.vue'
    import Button from '../../../src/Button.vue'
    import Spread from '../../../src/Spread.vue'

    export default {
        components:{
            'hy-tabs': Tabs,
            'hy-tabs-head':TabsHead,
            'hy-tabs-body':TabsBody,
            'hy-tabs-item':TabsItem,
            'hy-tabs-pane':TabsPane,
            'hy-button':Button,
            'hy-spread':Spread
        },
        data(){
            return {
                seletedTab:'tab1',
                content:
`
<hy-tabs :seleted.sync="seletedTab">
    <hy-tabs-head>
        <template slot="actions">
            <hy-button>点击</hy-button>
        </template>
        <hy-tabs-item name="tab1" >tab1</hy-tabs-item>
        <hy-tabs-item name="tab2":disabled="true">tab2</hy-tabs-item>
        <hy-tabs-item name="tab3">tab3</hy-tabs-item>
    </hy-tabs-head>
    <hy-tabs-body>
        <hy-tabs-pane name="tab1">content1</hy-tabs-pane>
        <hy-tabs-pane name="tab2">content2</hy-tabs-pane>
        <hy-tabs-pane name="tab3">content3</hy-tabs-pane>
    </hy-tabs-body>
</hy-tabs>
<script>
...
new Vue({
    el:"#app",
    data:{
        seletedTab:'tab1'
    },
})
<script>`.trim(),
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
