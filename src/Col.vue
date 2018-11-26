<template>
    <div :class="['col',`col-${this.span}`,`offset && offset-${this.offset}`]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'HyCol',
    props:{
        span:[Number,String],
        offset:[Number,String]
    }
}
</script>

<style scoped lang="scss">
.col{
    width: 50%;
    height: 100px;
    background: #999;
    border: 1px solid red;
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
