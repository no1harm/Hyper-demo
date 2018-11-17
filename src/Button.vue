<template>
    <button class="hy-button" :class="{[`icon-${icontPostition}`]:true}">
        <svg class="icon" v-if="icon" aria-hidden="true" >
            <use :xlink:href=`#i-${icon}` ></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    // props:['icon','icontPostition'],
    props:{
        icon:{},
        icontPostition:{
            type:String,
            default:'left',
            validator(value){
                if(value !== 'left' && value !== 'right'){
                    return false
                }else{
                    return true
                }
            }
        }
    }
};
</script>

<style lang="scss">
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
  > .icon{order: 1;margin-right: .3em;}
  > .content{order: 2}
  &.icon-right{
      .content{order: 1}
      .icon{order: 2;margin-left: .3em;margin-right: 0;}
  }
}
</style>