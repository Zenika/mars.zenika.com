<template>
  <div class="wrapper">
    <img class="category-icon" :src="data.icon" />
    <h4 class="category-title">{{data.name}}</h4>
    <div v-if="!isSelected" class="selected"></div>
    <div v-if="isSelected" class="arrow"></div>
  </div>
</template>

<script>
export default {
  props: [
    'data',
    'isSelected'
  ]
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.wrapper {
  height: 100%;
  background: $black-color;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .selected {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: inherit;
    opacity: 0.5;
    z-index: 5;
  }

  .arrow {
    height: 30px;
    width: 30px;
    position: absolute;
    top: 0;
    right: -15px;
    transform: rotate(45deg);
    margin: auto;
    bottom: 0;
    background-color: inherit;

    @media (max-width: 540px) {
      height: 16px;
      width: 16px;
      right: -8px;
    }
  }

  .category-icon {
    max-width: 40%;
  }

  .category-title {
    font-weight: bold;

    &.hidden {
      opacity: 0;
    }
  }
}
</style>
