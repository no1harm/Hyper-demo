import Toast from './Toast'
export default {
    install(Vue,options){
        Vue.prototype.$toast = function(message){
            const construstor = Vue.extend(Toast)
            const toast = new construstor()
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}