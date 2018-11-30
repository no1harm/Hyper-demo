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

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })
    describe('props',()=>{
        it('可以接受 name',()=>{
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
            propsData: {
                name: 'xxx'
            }
            }).$mount()
            expect(vm.$el.getAttribute('data-name')).to.equal('xxx')
            vm.$destroy()
        })
        it('可以接受 disabled',()=>{
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
            propsData: {
                disabled: true
            }
            }).$mount()
            expect(vm.$el.classList.contains('tabs-item-disabled')).to.be.true
            const callback = sinon.fake();
            vm.$on('click', callback)
            vm.$el.click()
            expect(callback).to.have.not.been.called
            vm.$destroy()
        })
    })
})