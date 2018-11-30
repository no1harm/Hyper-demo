const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/Tabs'
import TabsHead from '../src/TabsHead.vue'
import TabsBody from '../src/TabsBody.vue'
import TabsItem from '../src/TabsItem.vue'
import TabsPane from '../src/TabsPane.vue'
Vue.component('hy-tabs',Tabs)
Vue.component('hy-tabs-head',TabsHead)
Vue.component('hy-tabs-body',TabsBody)
Vue.component('hy-tabs-item',TabsItem)
Vue.component('hy-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })
    describe('props',()=>{
        it('可以接受 selected',(done)=>{
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <hy-tabs seleted="tab1">
                <hy-tabs-head>
                    <hy-tabs-item name="tab1" >tab1</hy-tabs-item>
                    <hy-tabs-item name="tab2">tab2</hy-tabs-item>
                    <hy-tabs-item name="tab3">tab3</hy-tabs-item>
                </hy-tabs-head>
                <hy-tabs-body>
                    <hy-tabs-pane name="tab1">content1</hy-tabs-pane>
                    <hy-tabs-pane name="tab2">content2</hy-tabs-pane>
                    <hy-tabs-pane name="tab3">content3</hy-tabs-pane>
                </hy-tabs-body>
            </hy-tabs-body>
            `
            let vm = new Vue({
                el:div
            })
            vm.$nextTick(()=>{
                let currentItem = vm.$el.querySelector(`.hy-tabs-item[data-name='tab1']`)
                expect(currentItem.classList.contains('current-tabs-item')).to.be.true
                done()
                vm.$el.remove()
                vm.$destroy()
            })   
        })
        it('可以接受 direction',()=>{
        })
    })
})