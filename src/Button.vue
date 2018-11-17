<template>
    <button class="hy-button">
        <svg class="icon" v-if="icon"aria-hidden="true">
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
        <slot></slot>
    </button>
</template>

<script>
export default {
    props:['icon']
};
</script>

<style lang="scss">
.hy-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border: 1px solid var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>