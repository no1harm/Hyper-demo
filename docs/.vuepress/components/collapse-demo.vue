<template>
    <div class="contentWrapper">
        <div class="componentsMessage">
            <hy-collapse :selected.sync="selectedCollapse">
                <hy-collapse-item title="标题 ①" name="1">内容一</hy-collapse-item>
                <hy-collapse-item title="标题 ②" name="2">内容二</hy-collapse-item>
                <hy-collapse-item title="标题 ③" name="3">内容三</hy-collapse-item>
            </hy-collapse>
            <hy-spread >
            <pre v-if="showCode"><code>{{content}}</code></pre>
            </hy-spread>
        </div>
        <div class="dispalyCode" @click="showCode=!showCode">▼ <span clas="showSpan">显示代码</span></div>
    </div>
</template>

<script>
    import Collapse from '../../../src/Collapse.vue'
    import CollapseItem from '../../../src/CollapseItem.vue'
    import Spread from '../../../src/Spread.vue'

    export default {
        components:{
            'hy-collapse': Collapse,
            'hy-collapse-item':CollapseItem,
            'hy-spread':Spread
        },
        data(){
            return {
                selectedCollapse:["1","2"],
                content:
`
<hy-collapse :selected.sync="selectedCollapse">
    <hy-collapse-item title="标题 ①" name="1">内容一</hy-collapse-item>
    <hy-collapse-item title="标题 ②" name="2">内容二</hy-collapse-item>
    <hy-collapse-item title="标题 ③" name="3">内容三</hy-collapse-item>
</hy-collapse>
<script>
...
new Vue({
    el:"#app",
    data:{
        selectedCollapse:["1","2"]
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
