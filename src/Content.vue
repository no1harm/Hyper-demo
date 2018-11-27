<template>
    <div class='hy-content'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'hyperContent',
    data() {
      return {

      }
    },
    components: {

    }
}
</script>

<style scoped lang="scss">
.hy-content{
    flex-grow: 1;
}
</style>
