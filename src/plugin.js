import Toast from './Toast'

let currentToast 

export default {
    install(Vue,options){
        Vue.prototype.$toast = function(toastOptions){
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({Vue,propsData:toastOptions})
        }
    }
}

function createToast({Vue,propsData}){
    const construstor = Vue.extend(Toast)
    const toast = new construstor({propsData})
    toast.$slots.default = [propsData.message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}