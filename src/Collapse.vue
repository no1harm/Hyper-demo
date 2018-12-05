<template>
    <div class='hyper-collapse'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'hyperCollapse',
    data() {
      return {

      }
    },
}
</script>

<style scoped lang="scss">
$border-color:#999;
.hyper-collapse{
    border-radius: 4px;
    border: 1px solid $border-color;
}
</style>
