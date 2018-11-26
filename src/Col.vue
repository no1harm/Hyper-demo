<template>
    <div  :class="colClass":style="colStyle">
        <div style="border:1px solid green;">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HyCol',
    props:{
        span:[Number,String],
        offset:[Number,String],
    },
    data(){
        return {
            gutter:0
        }
    },
    computed:{
        colClass(){
            let {span,offset} = this
            return [
                'col',
                span && `col-${this.span}`,
                offset && `offset-${this.offset}`
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
    height: 100px;
    background-color: #aaa;
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
}
</style>
