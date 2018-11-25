const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    it('可以接收 value.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
        propsData: {
            value: '你号没了'
        }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('你号没了')
        vm.$destroy()
    })
    it('可以接收 disabled.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
        propsData: {
            disabled: true
        }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.disabled).to.equal(true)
        vm.$destroy()
    })
    it('可以接收 readonly.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
        propsData: {
            readonly: true
        }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.readOnly).to.equal(true)
        vm.$destroy()
    })
    it('可以接收 error.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
        propsData: {
            error: 'SOS'
        }
        }).$mount()
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-Errorprompt')
        const errorMessage = vm.$el.querySelector('.error-message')
        expect(errorMessage.innerText).to.equal("SOS")
        vm.$destroy()
    })
})