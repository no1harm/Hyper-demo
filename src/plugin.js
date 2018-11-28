import Toast from './Toast'
export default {
    install(Vue,options){
        Vue.prototype.$toast = function(message){
            const construstor = Vue.extend(Toast)
            const toast = new construstor({
                propsData:{
                    closeButton:{
                        text:'知道了',
                        callback(){
                            console.log('用户知道了')
                        }
                    }
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}