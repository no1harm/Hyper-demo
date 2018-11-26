<template>
    <div :class="['col',span && `col-${this.span}`,offset && `offset-${this.offset}`]"
        :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
        <div style="border:1px solid red;height: 100px;">
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
}
</script>

<style scoped lang="scss">
.col{
    width: 50%;
    > div{
        background: #aaa;
    }
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
