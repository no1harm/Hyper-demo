<template>
    <div class="contentWrapper">
        <div class="componentsMessage">
            <hy-row gutter="10">
                <hy-col span="12" :ipad="{span:'6'}"><div class="innerDiv">间隔 10px</div> </hy-col>
                <hy-col span="12" :ipad="{span:'18'}"><div class="innerDiv">间隔 10px</div></hy-col>
            </hy-row>
            <hy-row >
                <hy-col span="1" > 1</hy-col>
                <hy-col span="22" offset="1">2</hy-col>
            </hy-row>
            <transition name="entrance">
                <pre v-if="showCode"><code>{{content}}</code></pre>
            </transition>
        </div>
        <div class="dispalyCode" @click="showCode=!showCode">▼ <span>显示代码</span></div>
    </div>
</template>

<script>
    import Row from '../../../src/Row.vue'
    import Col from '../../../src/Col.vue'

    export default {
        components:{
            'hy-row': Row,
            'hy-col': Col
        },
        data(){
            return {
                content:
`
<hy-row gutter="10">
    <hy-col :ipad="{span:'6'}"><div>间隔 10px</div> </hy-col>
    <hy-col :ipad="{span:'18'}"><div>间隔 10px</div></hy-col>
</hy-row>
<hy-row >
    <hy-col span="1" > 1</hy-col>
    <hy-col span="22" offset="1">2</hy-col>
</hy-row>`.trim(),
                showCode:false
            }
        }
    }
</script>

<style lang="scss" scoped>
$bg-yellow:#FBDF51;
$bg-blue:#337480;
$border-radius:4px;
.entrance-enter-active {
  animation: entrance-in .5s;
}
.entrance-leave-active {
  animation: entrance-in .5s reverse;
}
@keyframes entrance-in {
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.contentWrapper{
    .row{
        margin-bottom:10px;
        &:first-child{
            flex-wrap: nowrap;
            .col{
                background-color: #fff;
                .innerDiv{
                    background-color: $bg-yellow;
                    border-bottom-left-radius: $border-radius;
                    border-top-left-radius: $border-radius;
                }
                &:last-child{
                    .innerDiv{
                        background-color: $bg-blue;
                        border-bottom-left-radius: 0;
                        border-top-left-radius: 0;
                        border-bottom-right-radius: $border-radius;
                        border-top-right-radius: $border-radius;
                    }
                }
            }
        }
    }
    .col{
        min-height: 36px;
        text-align: center;
        line-height: 36px;
        &:nth-child(odd){
            background-color: $bg-yellow;
        }
        &:nth-child(even){
            background-color: $bg-blue;            
        }
        &:first-child{
            border-bottom-left-radius: $border-radius;
            border-top-left-radius: $border-radius;
        }
        &:last-child{
            border-bottom-right-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }
    }
    &:hover{
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.2);
        .dispalyCode{
            background-color: #f9fafc;
            color: rgb(194, 194, 194);
        }
    }
    .componentsMessage{
        border:1px solid #ebebeb;
        padding: 20px 20px 20px;
        overflow: hidden;
    }
    .dispalyCode{
        margin-top: -1px;
        height: 30px;
        background-color: #fff;
        border:1px solid #ebebeb;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        margin-bottom: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#ebebeb;
        font-size: 12px;
        > span{
            font-size: 12px;
            padding-left: 6px;
        }
    }
}
</style>
