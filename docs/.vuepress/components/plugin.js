import Toast from '../../../src/Toast.vue'

let currentToast 

export default {
    install(Vue,options){
        Vue.prototype.$toast = function(toastOptions){
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({
                Vue,
                propsData:toastOptions,
                onClose:()=>{
                    currentToast = null
                }
            })
        }
    }
}

function createToast({Vue,propsData,onClose}){
    const construstor = Vue.extend(Toast)
    const toast = new construstor({propsData})
    toast.$slots.default = [propsData.message]
    toast.$mount()
    toast.$on('close',onClose)
    document.body.appendChild(toast.$el)
    return toast
}