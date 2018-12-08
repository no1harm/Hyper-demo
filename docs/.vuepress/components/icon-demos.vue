<template>
    <div class="contentWrapper">
        <div class="componentsMessage">
            <hy-icon name="settings"></hy-icon>
            <hy-icon name="loading"></hy-icon>
            <hy-icon name="right"></hy-icon>
            <hy-icon name="left"></hy-icon>
            <transition name="entrance">
                <pre v-if="showCode"><code>{{content}}</code></pre>
            </transition>
        </div>
        <div class="dispalyCode" @click="showCode=!showCode">▼ <span>显示代码</span></div>
    </div>
</template>

<script>
    import Icon from '../../../src/Icon.vue'

    export default {
        components:{
            'hy-icon': Icon
        },
        data(){
            return {
                content:
`
<hy-icon name="settings"></hy-icon>
<hy-icon name="loading"></hy-icon>
<hy-icon name="right"></hy-icon>
<hy-icon name="left"></hy-icon>`.trim(),
                showCode:false
            }
        }
    }
</script>

<style lang="scss" scoped>
.icon{
    width: 2em;
    height: 2em;
    padding:  0 1em;
}
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
