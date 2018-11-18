<template>
    <button class="hy-button" :class="{[`icon-${icontPostition}`]:true}" @click="$emit('click')">
        <hy-icon :name="icon" v-if="icon && !loading"></hy-icon>
        <hy-icon name="loading" v-if="loading" class="loading icon"></hy-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import Icon from './Icon.vue'
export default {
    // props:['icon','icontPostition']
        props:{
        icon:{},
        loading:{
            type:Boolean,
            default:false
        },
        icontPostition:{
            type:String,
            default:'left',
            validator(value){
                return value === 'left' || value === 'right'
            }
        }
    },
    components:{
        "hy-icon":Icon
    },
};
</script>

<style lang="scss">
@keyframes spin{
    0% {transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
}
.hy-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {border: 1px solid var(--border-color-hover);}
  &:active {background: var(--button-active-bg);}
  &:focus {outline: none;}
  .loading{
      animation: spin 1s infinite linear;
  }
  > .icon{order: 1;margin-right: .3em;}
  > .content{order: 2}
  &.icon-right{
      .content{order: 1}
      .icon{order: 2;margin-left: .3em;margin-right: 0;}
  }
}
</style>