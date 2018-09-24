<template>
  <div class="os-project">
    <div class="header">
      <div class="flex-align">
        <h2 class="title">
          {{data.title}}
        </h2>
        <a class="github-btn" v-if="data" target="_blank" :href="'https://github.com/' + data.user + '/' + data.repos">
          <img src="static/assets/img/github-icon.svg" />
          <span>Star</span>
        </a>
      </div>
      <div class="owners-list">
        <div class="owner" v-for="owner in data.owners">
          <member-picture class="member-pic" :data="owner"></member-picture>
        </div>
      </div>
    </div>
    <div class="tag-list">
      <div class="tag" v-for="tag in data.tags">#{{tag}}</div>
    </div>
    <div class="description" v-html="data.description"></div>
  </div>
</template>

<script>
import MemberPicture from '@/components/shared/MemberPicture'

export default {
  props: ['data'],
  components: {
    MemberPicture
  }
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.os-project {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.2);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;

    .flex-align {
      justify-content: center;
    }

    .title {
      margin-right: 20px;
    }

    .owners-list {
      display: flex;

      .owner {
        margin-right: 20px;
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

  .tag-list {
    .tag {
      background-color: rgba(244, 197, 71, 0.6);
      margin-bottom: 20px;
    }
  }

  .description {
    padding-right: 10px;
    max-height: 200px;
    overflow-y: auto;
  }
}
</style>
