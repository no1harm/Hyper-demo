const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    const Constructor = Vue.extend(Input)
    let vm
    after(function() {
        vm.$destroy()
    });
    describe('props',()=>{
        it('可以接收 value.', () => {
             vm = new Constructor({
            propsData: {
                value: '你号没了'
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('你号没了')
        })
        it('可以接收 disabled.', () => {
             vm = new Constructor({
            propsData: {
                disabled: true
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('可以接收 readonly.', () => {
             vm = new Constructor({
            propsData: {
                readonly: true
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('可以接收 error.', () => {
             vm = new Constructor({
            propsData: {
                error: 'SOS'
            }
            }).$mount()
            const useElements = vm.$el.querySelectorAll('use')
            expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-Errorprompt')
            const errorMessage = vm.$el.querySelector('.error-message')
            expect(errorMessage.innerText).to.equal("SOS")
        })
        describe('事件',()=>{
            it('可以触发 change/input/focus/blur 事件',()=>{
                ['change','input','focus','blur'].forEach((eventName)=>{
                    vm = new Constructor({}).$mount()
                    const callback = sinon.fake();
                    vm.$on(eventName, callback)
                    // 触发 input 的 change 事件
                    let event = new Event(eventName)
                    let inputElement = vm.$el.querySelector('input')
                    inputElement.dispatchEvent(event)
                    expect(callback).to.have.been.calledWith(event)
                })
            })
        })
    })
})