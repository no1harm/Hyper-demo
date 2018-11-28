<template>
    <div class='hy-toast'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'HyToast',
}
</script>

<style scoped lang="scss">
$font-size:14px;
$toast-height:40px;
$toast-bg:rgba(0,0,0,0.75);
.hy-toast{
    font-size: $font-size;
    color:white;
    height: $toast-height;
    line-height: 1.8;
    padding: 0 1.5em;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.5)
}
</style>
