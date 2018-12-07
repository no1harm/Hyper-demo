<template>
    <button class="hy-button" :class="{[`icon-${iconPostition}`]:true}" @click="$emit('click')">
        <hy-icon :name="icon" v-if="icon && !loading"></hy-icon>
        <hy-icon name="loading" v-if="loading" class="loading icon"></hy-icon>
        <div class="button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import Icon from './Icon.vue'
export default {
    name:"hyperButton",
    // props:['icon','icontPostition']
        props:{
        icon:{},
        loading:{
            type:Boolean,
            default:false
        },
        iconPostition:{
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

<style lang="scss" scoped>
$button-height:32px;
$font-size:14px;
$button-bg:white;
$button-active-bg:#eee;
$button-radius:4px;
$color:#333;
$border-color:#999;
$border-color-hover:#666;
@keyframes spin{
    0% {transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
}
.hy-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $button-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  &:hover {border: 1px solid $border-color-hover;}
  &:active {background: $button-active-bg;}
  &:focus {outline: none;}
  .loading{
      animation: spin 1s infinite linear;
  }
  > .icon{order: 1;margin-right: .3em;}
  > .button-content{order: 2}
  &.icon-right{
      .button-content{order: 1}
      .icon{order: 2;margin-left: .3em;margin-right: 0;}
  }
}
</style>