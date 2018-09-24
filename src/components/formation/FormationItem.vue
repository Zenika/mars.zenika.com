<template>
  <div class="formations">
    <div class="header">
      <div class="flex-align">
        <img :src="data.picture" class="logo"></img>
        <h2>
          <a class="title page-sub-title" :href="data.link" target="_blank">
            {{data.title}}
          </a>
        </h2>
      </div>
    </div>
    <div class="description" v-html="data.description"></div>
    <znk-button class="participate" :href="data.link">Participer</znk-button>
    <div class="dates">
      <h3 class="dates-title">Prochaines sessions</h3>
      <div v-if="data.dates.length === 0" class="dates-empty">
        Nous n'avons pas de formation planifiée pour le moment, mais n'hésitez pas à
        <router-link class="dates-empty-link" to="/contact">prendre contact</router-link> !
      </div>
      <ul v-else class="dates-list">
        <li v-for="date in data.dates">
          <a class="dates-link" :href="linkSession" target="_blank">
            <formation-date :date="date"></formation-date>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="icons">
        <tooltip-image v-if="data.certifying" src="static/assets/img/certifying.svg" title="Certifiante"></tooltip-image>
        <tooltip-image v-if="data.official" src="static/assets/img/official.svg" title="Officielle"></tooltip-image>
        <tooltip-image v-if="data.exclusivity" src="static/assets/img/zenika.svg" title="Exclusivité Zenika"></tooltip-image>
      </div>
      <div v-if="data.duration <= 1" class="duration">{{ data.duration }} jour</div>
      <div v-else class="duration">{{ data.duration }} jours</div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/shared/Button'
import MemberPicture from '@/components/shared/MemberPicture'
import TooltipImage from '@/components/formation/TooltipImage'
import FormationDate from '@/components/formation/FormationDate'

export default {
  props: ['data'],
  computed: {
    linkSession () {
      return this.data.link.replace('description', 'sessions')
    }
  },
  components: {
    MemberPicture,
    TooltipImage,
    FormationDate,
    ZnkButton: Button
  }
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.formations {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 400px;
  max-width: 450px;
  flex-grow: 2;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;

    .flex-align {
      justify-content: center;
      min-height: 120px;
    }

    .title {
      margin-right: 20px;
      text-decoration: none;
      color: #ffffff;
    }

    .trainers-list {
      display: flex;
      flex-wrap: wrap;

      .trainer {
        margin: 3px 20px 3px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: bold;

        .member-pic {
          height: 70px;
          width: 70px;
          margin-bottom: 5px;
        }
      }
    }

    .github-button {
      margin-right: 10px;
    }
  }

  .participate {
    margin: 20px 0 0 0;
  }

  .dates-empty {
    font-style: italic;
  }
  .dates-empty-link {
    color: inherit;
  }

  .dates-title {
    margin-bottom: 5px;
  }
  .dates-list {
    margin-top: 0;
  }
  .dates-link {
    color: #ffffff;
    text-decoration: none;
  }

  .tag-list {
    .tag {
      background-color: rgba(71, 197, 244, 0.6);
      margin-bottom: 20px;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;

    .details {
      text-align: right;
    }

  }

  .logo {
    height: 50px;
    width: 50px;
    margin-right: 15px;
  }

  .description {
    padding-right: 10px;
    height: 200px;
    overflow-y: auto;
  }
}
</style>
