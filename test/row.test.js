const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/Row'
import Col from '../src/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('Row 存在.', () => {
        expect(Row).to.be.ok
    })
    it('可以接收 gutter',(done)=>{
        Vue.component('hy-row',Row)
        Vue.component('hy-col',Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <hy-row gutter="10">
            <hy-col span="12"></hy-col>
            <hy-col span="12"></hy-col>
        </hy-row>
        `
        let vm = new Vue({
            el:'div'
        })
        setTimeout(()=>{
            const row = vm.$el.querySelector('.row')
            console.log(vm.$el)
            expect(getComputedStyle(row).marginLeft).to.be.eq('-5px')
            expect(getComputedStyle(row).marginRight).to.be.eq('-5px')
            const col = document.querySelectorAll('.col')
            expect(getComputedStyle(col[0]).paddingLeft).to.be.eq('5px')
            expect(getComputedStyle(col[1]).paddingRight).to.be.eq('5px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })
    })
    it('可以接收 align',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
        propsData: {
            align:'left'
        }
        }).$mount(div)
        const rowElement = vm.$el
        expect(getComputedStyle(rowElement).justifyContent).to.be.eq('flex-start')
        vm.$el.remove()
        vm.$destroy()
    })
})