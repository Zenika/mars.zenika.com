<template>
  <div class="section-container section-team">
    <div class="page-header">
      <h1 class="page-title">L'équipe</h1>
      <div class="page-description flex-align">
         <img class="fractal-img" src="static/assets/img/fractal2.png" />
          <p v-html="teamDescription"></p>
          <img class="fractal-img" src="static/assets/img/fractal1.png" />
      </div>
      <div class="next-section pointer" v-scroll-to="'.member-list'">
          <p class="discover-offers">Découvrir notre équipe</p>
          <img class="down-arrow pointer" src="static/assets/img/down-arrow.png" />
        </div>
    </div>
    <div v-if="membersRandomOrder" class="member-list">
      <member-item v-for="member in membersRandomOrder" :data="member" :key="member.fullName"></member-item>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import MemberItem from '@/components/team/MemberItem'

export default {
  components: {
    MemberItem
  },
  computed: {
    ...mapGetters('team', [
      'membersRandomOrder'
    ]),
    ...mapState('pagesDescription', [
      'teamDescription'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.section-team {
  width: 100%;
  padding-bottom: 0px;
  color: white;

  .page-header {
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    justify-content: center;

    .page-title {
      padding-top: 0 !important;
    }

    .page-description {
      width: 75% !important;
    }

    .fractal-img {
      max-width: 17%;
      height: auto;
      width: auto;
      margin: 0 50px;

      @media (max-width: 1280px) {
        display: none;
      }
    }

    .next-section {
      margin: 0px;
      position: absolute;
      bottom: 3%;
      left: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translate(-50%, 0);

      .discover-offers {
        font-weight: bold;
        margin-bottom: 10px;
      }

      .down-arrow {
        height: 40px;
        width: 40px;
      }
    }
  }

  .member-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    padding: 20px;
  }
}
</style>
