import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './buttonGroup.vue'

Vue.component('hy-button',Button)
Vue.component('hy-icon',Icon)
Vue.component('hy-button-group',ButtonGroup)

new Vue({
    el:"#app",
    data:{
        loading:false
    }
})