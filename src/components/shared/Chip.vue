<template>
  <div class="chip" :class="[color, {'disabled': isDisabled}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'color',
    'isDisabled'
  ]
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.chip {
  border: 1px solid;
  color: white;
  padding: 5px 20px;

  &.green {
    background-color: $green-button-color;
    border-color: $green-button-color;
  }

  &.red {
    background-color: $red-button-color;
    border-color: $red-button-color;
  }

  &.blue {
    background-color: $blue-button-color;
    border-color: $blue-button-color;
  }

  &.yellow {
    background-color: $yellow-button-color;
    border-color: $yellow-button-color;
  }

  &.disabled {
    background-color: transparent;
    border-color: white;
  }
}
</style>
