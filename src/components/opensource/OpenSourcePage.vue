<template>
  <div class="section-container section-open-source">
    <h1 class="page-title">Nos projets Open source</h1>
    <div v-if="projects" class="open-source-projects-list">
      <div v-for="col in [0, 1]" class="column">
        <open-source-project v-for="(project, index) in projects" :data="project" v-if="(index + col) % 2 === 0" class="open-source-project" :key="project.title"></open-source-project>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OpenSourceProject from '@/components/opensource/OpenSourceProject'

export default {
  computed: {
    ...mapState('opensource', [
      'projects'
    ]),
    ...mapState('pagesDescription', [
      'opensourceDescription'
    ])
  },
  components: {
    OpenSourceProject
  }
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.section-open-source {
  width: 100%;
  min-height: 100vh;

  .page-title {
    margin-bottom: 60px !important;
  }

  .open-source-projects-list {
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

    .open-source-project {
      margin: 0px 20px 40px 20px;
    }
  }
}
</style>
