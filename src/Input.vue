<template>
    <div class='HyperInput' :class={'error':error}>
        <input type="text" 
          :disabled="disabled"    
          :value="value" 
          :readonly="readonly" 
          @change="$emit('change',$event)"
          @input="$emit('change',$event)"
          @focus="$emit('change',$event)"
          @blur="$emit('change',$event)">
        <template v-if="error">
            <Icon name="Errorprompt" class="error-icon"></Icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  name: "hyperInput",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  data() {
    return {};
  },
  components: { Icon }
};
</script>

<style scoped lang="scss">
$height: 32px;
$font-size: 14px;
$bg: white;
$border-radius: 4px;
$border-color: #999;
$border-color-hover: #666;
$box-shadow-color: rgba(0, 0, 0, 0.3);
$red: #f1453d;
.HyperInput {
  display: inline-flex;
  align-items: center;
  :not(:last-child){margin-right: .5em;}
  > input {
    height: $height;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: $font-size;
    border: 1px solid $border-color;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
      box-shadow: none;
    }
  }
  .error-icon{
      fill: $red;
  }
  .error-message{
      color:$red;
    font-size: 12px;
  }
}
</style>
