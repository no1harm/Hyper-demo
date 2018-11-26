<template>
    <div class='row'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'HyRow',
    data() {
      return {

      }
    },
    components: {

    }
}
</script>

<style scoped lang="scss">
.row{
    display: flex;
}
</style>
