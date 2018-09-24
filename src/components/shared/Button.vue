<template>
  <a class="button" :href="href" target="_blank">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: [
    'href'
  ]
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.button {
  background-color: $zenika-color-transparency;
  border: 1px solid $zenika-color;
  color: white;
  display: inline-block;
  margin: 10px 0 20px;
  padding: 5px 20px;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background-color: $zenika-color;
  }
}
</style>
