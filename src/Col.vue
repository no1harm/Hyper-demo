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
        pc:{
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
            let {span,offset,phone,ipad,narrowPc,pc,widePc} = this
            let phoneClass = []
            return [
                'col',
                span && `col-${this.span}`,
                offset && `offset-${this.offset}`,
                ...[phone && [`col-phone-${phone.span}`,phone.offset && `col-phone-offset-${phone.offset}`]],
                ...[ipad && [`col-ipad-${ipad.span}`,ipad.offset && `col-ipad-offset-${ipad.offset}`]],
                ...[narrowPc && [`col-narrowPc-${narrowPc.span}`,narrowPc.offset && `col-narrowPc-offset-${narrowPc.offset}`]],
                ...[pc && [`col-pc-${pc.span}`,pc.offset && `col-pc-offset-${pc.offset}`]],
                ...[widePc && [`col-widePc-${widePc.span}`,widePc.offset && `col-widePc-offset-${widePc.offset}`]],
                ]
        },
        colStyle(){
            return {
                paddingLeft:this.gutter/2+'px',
                paddingRight:this.gutter/2+'px'}
        }
    }
}
</script>

<style scoped lang="scss">
.col{
    width: 50%;
    @for $n from 1 through 24 {
        $class-prefix:col-;
        &.#{$class-prefix}#{$n} {
           width: ($n / 24) * 100%
        }
    }
    @for $n from 1 through 24 {
        $class-prefix:offset-;
        &.#{$class-prefix}#{$n} {
            margin-left: ($n / 24) * 100%
        }
    }
    @media (max-width: 576px){
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
    @media (min-width: 577px) and (max-width: 768px){
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
    @media (min-width: 769px) and (max-width: 992px){
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
    @media (min-width: 993px) and (max-width: 1200px){
        @for $n from 1 through 24 {
            $class-prefix:col-pc-;
            &.#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%
            }
        }
        @for $n from 1 through 24 {
            $class-prefix:col-pc-offset-;
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
