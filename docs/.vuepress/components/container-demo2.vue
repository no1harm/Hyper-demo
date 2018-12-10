<template>
    <div class="contentWrapper">
        <div class="componentsMessage">
            <hy-layout>
                <hy-header class="header">header</hy-header>
                <hy-layout>
                    <hy-content class="layout-content">content</hy-content>
                    <hy-sider class="layout-sider">sider</hy-sider>
                </hy-layout>
                <hy-footer class="footer">footer</hy-footer>
            </hy-layout>
            <transition name="entrance">
            <pre v-if="showCode"><code>{{content}}</code></pre>
            </transition>
        </div>
        <div class="dispalyCode" @click="showCode=!showCode">▼ <span clas="showSpan">显示代码</span></div>
    </div>
</template>

<script>
    import Layout from '../../../src/Layout.vue'
    import Header from '../../../src/Header.vue'
    import Footer from '../../../src/Footer.vue'
    import content from '../../../src/content.vue'
    import Sider from '../../../src/Sider.vue'

    export default {
        components:{
            'hy-layout': Layout,
            'hy-header':Header,
            'hy-content':content,
            'hy-footer':Footer,
            'hy-sider':Sider
        },
        data(){
            return {
                content:
`
 <hy-layout>
    <hy-header>header</hy-header>
    <hy-layout>
        <hy-content>content</hy-content>
        <hy-sider>sider</hy-sider>
    </hy-layout>
    <hy-footer>footer</hy-footer>
</hy-layout>`.trim(),
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
.layout-sider{
    color:#fff;
    background-color: #478d99;
    width: 20%;
    text-align: center;
    line-height: 140px;
}
</style>
