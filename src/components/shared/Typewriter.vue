<template>
  <div class="typewriter">
    <span><</span>
      <div class="sentences"></div>
    <span>></span>
  </div>
</template>

<script>
import { init } from 'ityped'

export default {
  props: ['sentences'],
  watch: {
    sentences: function () {
      this.initTypewriter()
    }
  },
  mounted () {
    this.initTypewriter()
  },
  methods: {
    initTypewriter: function () {
      if (this.sentences && this.sentences.length) {
        init('.sentences', {
          strings: this.sentences,
          typeSpeed: 55,
          backSpeed: 30,
          startDelay: 200,
          backDelay: 2000,
          loop: true,
          showCursor: false
        })
      }
    }
  }
}
</script>

<style lang="scss">
.typewriter {
  color: white;
  display: flex;
  flex-direction: row;
  font-size: 20px;
}
</style>
