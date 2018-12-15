<template>
    <div class="contentWrapper">
        <div class="componentsMessage">
            <hy-input value="默认样式" ></hy-input>
            <hy-input :disabled="true" value="不可点击"></hy-input>
            <hy-input readonly value="只读样式"></hy-input>
            <hy-input value="用" error="用户名不能少于两个字"></hy-input>
            <hy-spread>
                <pre v-if="showCode"><code>{{content}}</code></pre>
            </hy-spread>
        </div>
        <div class="dispalyCode" @click="showCode=!showCode">▼ <span clas="showSpan">显示代码</span></div>
    </div>
</template>

<script>
    import Input from '../../../src/Input.vue'
    import Spread from '../../../src/Spread.vue'

    export default {
        components:{
            'hy-input': Input,
            'hy-spread':Spread
        },
        data(){
            return {
                content:
`
<hy-input value="用户名" ></hy-input>
<hy-input :disabled="true" value="用户名"></hy-input>
<hy-input readonly value="用户名"></hy-input>
<hy-input value="用" error="用户名不能少于两个字"></hy-input>`.trim(),
                showCode:false
            }
        }
    }
</script>

<style lang="scss" scoped>
@import './main.scss';
</style>
