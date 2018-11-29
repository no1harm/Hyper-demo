import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './buttonGroup.vue'
import Input from './Input.vue'
import Row from './Row.vue'
import Col from './Col.vue'
import Layout from './Layout.vue'
import Header from './Header.vue'
import Content from './Content.vue'
import Sider from './Sider.vue'
import Footer from './Footer.vue'
import Toast from './Toast.vue'
import plugin from './plugin.js'

Vue.component('hy-button',Button)
Vue.component('hy-icon',Icon)
Vue.component('hy-button-group',ButtonGroup)
Vue.component('hy-input',Input)
Vue.component('hy-row',Row)
Vue.component('hy-col',Col)
Vue.component('hy-layout',Layout)
Vue.component('hy-header',Header)
Vue.component('hy-content',Content)
Vue.component('hy-sider',Sider)
Vue.component('hy-footer',Footer)
Vue.component('hy-toast',Toast)

Vue.use(plugin)

new Vue({
    el:"#app",
    data:{
        loading:false
    },
    methods:{
      inputChange(e){
        console.log(e.target.value)
      },
      callToast(){
        this.$toast({
            message:`I'm <strong>Groot</strong>
            I'm <strong>Groot</strong>
            I'm <strong>Groot</strong>
            I'm <strong>Groot</strong>
            I'm <strong>Groot</strong>
            I'm <strong>Groot</strong>
            I'm <strong>Groot</strong>
            I'm <strong>Groot</strong>`,
            closeButton:{
              text:'Close',
              callback(){
                  console.log('Closed')
              }
          },
          enableHtml:true,
          autoClose:false,
          autoCloseDelay:3,
          position:'right',
        })
      }
    },
})