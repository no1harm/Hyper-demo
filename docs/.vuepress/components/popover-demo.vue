<template>
    <div class="contentWrapper">
        <div class="componentsMessage">
            <hy-popover position="top">
                <template slot="content">
                    popover
                </template>
                <hy-button>popover</hy-button>
            </hy-popover>
            <hy-popover position="bottom">
                <template slot="content">
                    popover
                </template>
                <hy-button>popover</hy-button>
            </hy-popover>
            <hy-popover position="left">
                <template slot="content">
                    popover
                </template>
                <hy-button>popover</hy-button>
            </hy-popover>
            <hy-popover position="right">
                <template slot="content" slot-scope="{close}">
                    popover
                    <hy-button @click="close">关闭</hy-button>
                </template>
                <hy-button>popover</hy-button>
            </hy-popover>
            <hr style="margin:10px 0 10px">
            <hy-popover position="top" trigger="hover">
                <template slot="content">
                    popover
                </template>
                <hy-button>popover</hy-button>
            </hy-popover>
            <hy-popover position="bottom" trigger="hover">
                <template slot="content">
                    popover
                </template>
                <hy-button>popover</hy-button>
            </hy-popover>
            <hy-popover position="left" trigger="hover">
                <template slot="content">
                    popover
                </template>
                <hy-button>popover</hy-button>
            </hy-popover>
            <hy-popover position="right" trigger="hover">
                <template slot="content">
                    popover
                </template>
                <hy-button>popover</hy-button>
            </hy-popover>
            <transition name="entrance">
            <pre v-if="showCode"><code>{{content}}</code></pre>
            </transition>
        </div>
        <div class="dispalyCode" @click="showCode=!showCode">▼ <span clas="showSpan">显示代码</span></div>
    </div>
</template>

<script>
    import Popover from '../../../src/Popover.vue'
    import Button from '../../../src/Button.vue'

    export default {
        name:"popover",
        components:{
            'hy-popover': Popover,
            'hy-button': Button,
        },
        data(){
            return {
                seletedTab:'tab1',
                content:
`
<hy-popover position="top">
    <template slot="content">
        popover
    </template>
    <hy-button>popover</hy-button>
</hy-popover>
<hy-popover position="bottom">
    <template slot="content">
        popover
    </template>
    <hy-button>popover</hy-button>
</hy-popover>
<hy-popover position="left">
    <template slot="content">
        popover
    </template>
    <hy-button>popover</hy-button>
</hy-popover>
<hy-popover position="right">
    <template slot="content" slot-scope="{close}">
        popover
        <hy-button @click="close">关闭</hy-button>
    </template>
    <hy-button>popover</hy-button>
</hy-popover>
<hr style="margin:10px 0 10px">
<hy-popover position="top" trigger="hover">
    <template slot="content">
        popover
    </template>
    <hy-button>popover</hy-button>
</hy-popover>
<hy-popover position="bottom" trigger="hover">
    <template slot="content">
        popover
    </template>
    <hy-button>popover</hy-button>
</hy-popover>
<hy-popover position="left" trigger="hover">
    <template slot="content">
        popover
    </template>
    <hy-button>popover</hy-button>
</hy-popover>
<hy-popover position="right" trigger="hover">
    <template slot="content">
        popover
    </template>
    <hy-button>popover</hy-button>
</hy-popover>`.trim(),
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
