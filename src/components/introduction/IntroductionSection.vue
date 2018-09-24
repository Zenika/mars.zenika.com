<template>
  <div class="section-container section-introduction">
    <div class="who-we-are">
      <h1 class="title">Qui sommes-nous?</h1>
      <div class="content">
        <p class="description">
          <span v-html="introductionDescription"></span>
          <br/><br/>
          <span>Retrouvez plus d'informations sur <a href="https://www.zenika.com" target="_blank">zenika.com</a>.</span>
        </p>
        <div class="flex-align twitter-feed-container">
          <a data-chrome="nofooter" data-width="500" data-height="430" class="twitter-timeline" :href="twitterUrl" target="_blank"></a>
        </div>
      </div>
      <div class="skills-list">
        <h1 class="title">Triple compétence</h1>
        <div class="flex-align skills-list-wrapper">
          <div class="skill">
            <i class="material-icons">supervisor_account</i>
            <h3>Conseil</h3>
            <p v-html="adviseDescription"></p>
          </div>
          <div class="skill">
            <i class="material-icons">build</i>
            <h3>Réalisation</h3>
            <p v-html="realisationDescription"></p>
          </div>
          <div class="skill">
            <i class="material-icons">school</i>
            <h3>Formation</h3>
            <p v-html="trainningDescription"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import miscellaneousService from '@/services/miscellaneous.service'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      twitterFeedContainerClassName: 'twitter-feed-container'
    }
  },
  computed: mapState('pagesDescription', [
    'introductionDescription',
    'trainningDescription',
    'adviseDescription',
    'realisationDescription',
    'twitterUrl'
  ]),
  watch: {
    twitterUrl () {
      // Append twitter script when twitterUrl is fetched
      miscellaneousService.appendTwitterScriptToHTML(this.twitterFeedContainerClassName)
    }
  },
  mounted () {
    if (this.twitterUrl) miscellaneousService.appendTwitterScriptToHTML(this.twitterFeedContainerClassName)
  }
}
</script>

<style scoped lang="scss">
@import '~variables/vars.scss';

.section-introduction {
  width: 100%;

  .title {
    text-align: center;
    padding-top: 50px;
    font-size: $section-title-size;
    margin: 0;
    margin-bottom: 30px;
  }

  .who-we-are {
    background-color: $zenika-color;

    .content {
      max-width: 1300px;
      margin: 0 auto;
      padding: 20px;
      padding-bottom: 60px;
      display: flex;
      justify-content: space-between;

      @media (max-width: 1100px) {
        display: flex;
        flex-direction: column;
      }

      @media (max-width: 1400px) {
        max-width: 80%;
      }

      .description {
        flex: 0.8;
      }

      a {
        color: white;
        outline: none;
      }

      .flex-align {
        justify-content: center;
      }
    }

    .skills-list {
      background-color: $black-color;
      padding: 30px;

      .title {
        padding-top: 30px;
      }

      .skills-list-wrapper {
        width: 80%;
        margin: auto;
        margin-top: 40px;
        justify-content: space-around;
        flex-flow: row wrap;

        .skill {
          max-width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          i {
            font-size: 70px;
          }

          h3 {
            margin-bottom: 0;
          }

          p {
            text-align: center;
          }
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .section-introduction {
    .title {
      font-size: $header-subtitle-font-size-mobile;
    }
  }
}

</style>
