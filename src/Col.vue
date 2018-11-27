<template>
    <div :class="colClass":style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
let validator = (value) =>{
    let keys = Object.keys(value)
    let valid = true
    keys.forEach((key)=>{
        if(!['span','offset'].includes(key)){
            valid = false
        }
    })
    return valid
}
export default {
    name: 'HyCol',
    props:{
        span:[Number,String],
        offset:[Number,String],
        phone:{
            type:Object,
            validator,
        },
        ipad:{
            type:Object,
            validator,
        },
        narrowPc:{
            type:Object,
            validator,
        },
        widePc:{
            type:Object,
            validator,
        }
    },
    data(){
        return {
            gutter:0
        }
    },
    computed:{
        colClass(){
            let {span,offset,phone,ipad,narrowPc,widePc} = this
            let createClasses = this.createClasses
            return [
                'col',
                ...createClasses(phone,'phone-'),
                ...createClasses(ipad,'ipad-'),
                ...createClasses(narrowPc,'narrowPc-'),
                ...createClasses(widePc,'widePc-'),
                ...createClasses({span,offset}),
                ]
        },
        colStyle(){
            return {
                paddingLeft:this.gutter/2+'px',
                paddingRight:this.gutter/2+'px'}
        }
    },
    methods:{
        createClasses (obj,str=''){
            if(!obj){return []}
            let array = []
            if(obj.span){
                array.push(`col-${str}${obj.span}`)
            }
            if(obj.offset){
                array.push(`col-${str}offset-${obj.offset}`)
            }
            return array

        }
    }
}
</script>

<style scoped lang="scss">
.col{
    width: 50%;
    @media (min-width: 0px){
        @for $n from 1 through 24 {
            $class-prefix:col-phone-;
            &.#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%
            }
        }
        @for $n from 1 through 24 {
            $class-prefix:col-phone-offset-;
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%
            }
        }
    }
    @media (min-width: 577px) {
        @for $n from 1 through 24 {
            $class-prefix:col-ipad-;
            &.#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%
            }
        }
        @for $n from 1 through 24 {
            $class-prefix:col-ipad-offset-;
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%
            }
        }
    }
    @media (min-width: 769px) {
        @for $n from 1 through 24 {
            $class-prefix:col-narrowPc-;
            &.#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%
            }
        }
        @for $n from 1 through 24 {
            $class-prefix:col-narrowPc-offset-;
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%
            }
        }
    }
    @media (min-width: 993px) {
        @for $n from 1 through 24 {
            $class-prefix:col-;
            &.#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%
            }
        }
        @for $n from 1 through 24 {
            $class-prefix:col-offset-;
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%
            }
        }
    }
    @media (min-width: 1201px){
        @for $n from 1 through 24 {
            $class-prefix:col-widePc-;
            &.#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%
            }
        }
        @for $n from 1 through 24 {
            $class-prefix:col-widePc-offset-;
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%
            }
        }
    }
}
</style>
