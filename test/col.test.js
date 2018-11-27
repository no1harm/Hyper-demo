const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('Col 存在.', () => {
        expect(Col).to.be.ok
    })
    it('可以接收 span',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
        propsData: {
            span:12
        }
        }).$mount(div)
        const colElement = vm.$el
        expect(colElement.classList.contains('col-12')).to.be.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('可以接收 offset',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
        propsData: {
            offset:12
        }
        }).$mount(div)
        const colElement = vm.$el
        expect(colElement.classList.contains('col-offset-12')).to.be.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('可以接收 phone',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
        propsData: {
            phone:{span:'12',offset:'12'}
        }
        }).$mount(div)
        const colElement = vm.$el
        expect(colElement.classList.contains('col-phone-12')).to.be.eq(true)
        expect(colElement.classList.contains('col-phone-offset-12')).to.be.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('可以接收 ipad',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
        propsData: {
            ipad:{span:'12',offset:'12'}
        }
        }).$mount(div)
        const colElement = vm.$el
        expect(colElement.classList.contains('col-ipad-12')).to.be.eq(true)
        expect(colElement.classList.contains('col-ipad-offset-12')).to.be.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('可以接收 narrowPc',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
        propsData: {
            narrowPc:{span:'12',offset:'12'}
        }
        }).$mount(div)
        const colElement = vm.$el
        expect(colElement.classList.contains('col-narrowPc-12')).to.be.eq(true)
        expect(colElement.classList.contains('col-narrowPc-offset-12')).to.be.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('可以接收 widePc',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
        propsData: {
            widePc:{span:'12',offset:'12'}
        }
        }).$mount(div)
        const colElement = vm.$el
        expect(colElement.classList.contains('col-widePc-12')).to.be.eq(true)
        expect(colElement.classList.contains('col-widePc-offset-12')).to.be.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
})