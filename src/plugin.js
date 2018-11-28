import Toast from './Toast'
export default {
    install(Vue,options){
        Vue.prototype.$toast = function(toastOptions){
            const construstor = Vue.extend(Toast)
            const toast = new construstor({
                propsData:{
                    closeButton:toastOptions.closeButton
                }
            })
            toast.$slots.default = [toastOptions.message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}