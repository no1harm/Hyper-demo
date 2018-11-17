<template>
    <svg class="icon" v-if="icon" aria-hidden="true" >
        <use :xlink:href=`#i-${icon}` ></use>
    </svg>
</template>

<script>
export default {
    props:{
        icon:{},
    }
}
</script>

<style >
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
