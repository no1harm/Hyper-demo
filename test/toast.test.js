const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/Toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe('props',()=>{
        it('可以接受 autoClose',(done)=>{
            const div = document.createElement('div')
            document.body.appendChild(div)
            const construstor = Vue.extend(Toast)
            const vm = new construstor({
                propsData:{
                    autoClose:1.5,
                }
            }).$mount(div)
            vm.$on('close',()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
                vm.$el.remove()
                vm.$destroy()
            })
        })
        it('可以接受 closeButton',()=>{
            const callback = sinon.fake();
            const div = document.createElement('div')
            document.body.appendChild(div)
            const construstor = Vue.extend(Toast)
            const vm = new construstor({
                propsData:{
                    closeButton:{
                        text:'知道了',
                        callback,
                    },
                }
            }).$mount(div)
            let closeElement = vm.$el.querySelector('.close')
            expect(closeElement.innerHTML).to.eq('知道了')
            closeElement.click()
            expect(callback).to.have.been.called
            vm.$el.remove()
            vm.$destroy()
        })
        it('可以接受 enableHtml',()=>{
            const div = document.createElement('div')
            document.body.appendChild(div)
            const construstor = Vue.extend(Toast)
            const vm = new construstor({
                propsData:{
                    enableHtml:true
                }
            })
            vm.$slots.default = [`<strong id="test">i</strong>`]
            vm.$mount(div)
            let message = vm.$el.querySelector('#test')
            expect(message).to.be.exist
            vm.$el.remove()
            vm.$destroy()
        })
        it('可以接受 position',()=>{
            const div = document.createElement('div')
            document.body.appendChild(div)
            const construstor = Vue.extend(Toast)
            const vm = new construstor({
                propsData:{
                    position:'left'
                }
            }).$mount(div)
            expect(vm.$el.classList.contains('toast-position-left')).to.be.eq(true)
            vm.$el.remove()
            vm.$destroy()
        })
    })
})