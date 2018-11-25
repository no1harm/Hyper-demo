import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './buttonGroup.vue'
import Input from './Input.vue'

Vue.component('hy-button',Button)
Vue.component('hy-icon',Icon)
Vue.component('hy-button-group',ButtonGroup)
Vue.component('hy-input',Input)

new Vue({
    el:"#app",
    data:{
        loading:false
    },
    methods:{
      inputChange(e){
        console.log(e.target.value)
      }
    }
})