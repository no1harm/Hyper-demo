import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'

Vue.component('hy-button',Button)
Vue.component('hy-icon',Icon)

new Vue({
    el:"#app",
    data:{
        loading:false
    }
})