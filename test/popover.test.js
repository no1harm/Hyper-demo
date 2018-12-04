const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/Popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    describe('props',()=>{
        xit('可以接受 position',(done)=>{
            Vue.component('hy-popover',Popover)
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <hy-popover position="left" ref="a">
                <template slot="content">
                    popoverpopoverp
                </template>
                <button>popover</button>
            </hy-popover>
            `
            let vm = new Vue({
                el:div
            })
            vm.$el.querySelector('button').click()
            vm.$nextTick(()=>{
                const {contentWrapper} = vm.$refs.a.$refs
                expect(contentWrapper.classList.contains('position-left')).to.be.true
                done()
            })   
        })
    })
})