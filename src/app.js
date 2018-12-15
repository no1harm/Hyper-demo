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
import Tabs from './Tabs.vue'
import TabsHead from './TabsHead.vue'
import TabsBody from './TabsBody.vue'
import TabsItem from './TabsItem.vue'
import TabsPane from './TabsPane.vue'
import Popover from './Popover.vue'
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'
import Spread from './Spread.vue'

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
Vue.component('hy-tabs',Tabs)
Vue.component('hy-tabs-head',TabsHead)
Vue.component('hy-tabs-body',TabsBody)
Vue.component('hy-tabs-item',TabsItem)
Vue.component('hy-tabs-pane',TabsPane)
Vue.component('hy-popover',Popover)
Vue.component('hy-collapse',Collapse)
Vue.component('hy-collapse-item',CollapseItem)
Vue.component('hy-spread',Spread)

Vue.use(plugin)

new Vue({
    el:"#app",
    data:{
        loading:false,
        seletedTab:'tab1',
        selectedCollapse:['2','3']
    },
    methods:{
      inputChange(e){
        console.log(e.target.value)
      },
      callToast(){
        this.$toast({
            message:`目前余额 ${parseInt(Math.random()*1000)}`,
            closeButton:{
              text:'Close',
              callback(){
                  console.log('Closed')
              }
          },
          enableHtml:true,
          autoClose:1,
          position:'middle',
        })
      }
    },
})