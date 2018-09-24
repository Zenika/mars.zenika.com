<template>
  <div class="section-container">
    <div class="legal-notices-content">
      <div class="item" v-for="section in sections" :key="section.title">
        <h1 class="title">{{section.title}}</h1>
        <p v-html="section.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('legalNotices', ['sections'])
  }
}
</script>

<style lang="scss" scoped>
.section-container {
  padding-top: 150px;
  width: 100%;

  .legal-notices-content {
    max-width: 80%;
    width: 860px;
    margin: auto;

    .item {
      padding-bottom: 30px;

      .title {
        text-align: center;
        margin-bottom: 50px;
        font-size: 2.3em;
      }
    }
  }
}

@media (max-width: 900px) {
  .section-container {
    .legal-notices-content {
      .item {
        .title {
          font-size: 1.75em;
        }
      }
    }
  }
}
</style>
