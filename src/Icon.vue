<template>
    <svg class="icon" v-if="name" aria-hidden="true" >
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
import './svg.js'
export default {
    name:"hyperIcon",
    props:{
        name:{},
    }
}
</script>

<style scoped lang='scss'>
$currentColor:#333;
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: $currentColor;
    overflow: hidden;
}
</style>
