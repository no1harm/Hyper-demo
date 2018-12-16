<template>
    <div class="contentWrapper">
        <div class="componentsMessage">
            <hy-button @click="show = !show">Click Me</hy-button>
            <hy-spread>
                <div class="example" v-if="show"></div>
            </hy-spread>
            <hy-spread>
                <pre v-if="showCode"><code>{{content}}</code></pre>
            </hy-spread>
        </div>
        <div class="dispalyCode" @click="showCode=!showCode">▼ <span clas="showSpan">显示代码</span></div>
    </div>
</template>

<script>
    import Button from '../../../src/Button.vue'
    import Spread from '../../../src/Spread.vue'

    export default {
        components:{
            'hy-button':Button,
            'hy-spread':Spread
        },
        data(){
            return {
                show:false,
                content:
`
<hy-button @click="show = !show">Click Me</hy-button>
<hy-spread>
    <div class="example" v-if="show"></div>
</hy-spread>
<script>
import {Spread,Button} from hyper-youi

xport default {
    components:{
        'hy-button':Button,
        'hy-spread':Spread
    },
    data(){
        return{
            show:false
        }
    }
}
<script>
<style lang="scss" scoped>
$bg-yellow:#FBDF51;
.example{
    margin: 10px auto;
    width: 100%;
    height: 100px;
    border-radius: 4px;
    background-color: $bg-yellow;
}
</style>`.trim(),
                showCode:false
            }
        }
    }
</script>

<style lang="scss" scoped>
@import './main.scss';
$bg-yellow:#FBDF51;
.example{
    margin: 10px auto;
    width: 100%;
    height: 100px;
    border-radius: 4px;
    background-color: $bg-yellow;
}
</style>
