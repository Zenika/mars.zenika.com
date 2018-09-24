<template>
  <span v-on:mouseover="mouseOver" v-on:mouseout="mouseOut" class="container">
    <img class="icon" :src="src" />
    <span v-if="hover" class="tooltip">{{ title }}</span>
  </span>
</template>

<script>
export default {
  data: function () {
    return {
      hover: false
    }
  },
  methods: {
    mouseOver: function () {
      this.hover = true
    },
    mouseOut: function () {
      this.hover = false
    }
  },
  props: ['src', 'title']
}
</script>

<style scoped>
  .container {
    display: inline-block;
    position: relative;
  }
  .icon {
    height: 38px;
    width: 38px;
    margin-left: 5px;
  }
  .tooltip {
    background: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    left: 50%;
    line-height: 1em;
    margin-top: -5px;
    padding: 5px 10px;
    position: absolute;
    text-align: center;
    font-size: 14px;
    top: 0;
    transform: translate3d(-50%, -100%, 0);
  }
</style>
