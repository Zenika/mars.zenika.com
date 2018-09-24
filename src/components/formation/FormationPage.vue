<template>
  <div class="section-container section-formation">
    <h1 class="page-title">Nos formations</h1>
    <div v-if="formations" class="formation-list">
      <formation-item v-for="(item, index) in formations" :data="item" class="formation-item" :key="item.title"></formation-item>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FormationItem from '@/components/formation/FormationItem'

export default {
  computed: {
    ...mapState('formation', [
      'formations'
    ]),
    ...mapState('pagesDescription', [
      'formationDescription'
    ])
  },
  components: {
    FormationItem
  }
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.section-formation {
  width: 100%;
  min-height: 100vh;

  .page-title {
    margin-bottom: 60px !important;
  }

  .formation-list {
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .column {
      width: 50%;

      @media (max-width: 1030px) {
        width: 100%;
      }
    }

    .formation-item {
      margin: 0px 20px 40px 20px;
    }
  }
}

@media (max-width: 1030px) {
  .section-formation {
    .formation-list {
      width: 90%;

      .formation-item {
        margin: 0 0 20px 0;
      }
    }
  }
}
</style>
