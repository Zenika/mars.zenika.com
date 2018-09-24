<template>
  <div class="member">
    <img :src="data.picture" class="picture">
    <div class="overlay">
      <div class="name">{{data.fullName}}</div>
      <div class="social-networks">
        <a v-if="data.twitter" :href="data.twitter" class="link" target="_blank">
          <img class="logo pointer" src="static/assets/img/twitter.svg">
        </a>
        <a v-if="data.github" :href="data.github" class="link" target="_blank">
          <img class="logo pointer" src="static/assets/img/github.svg">
        </a>
      </div>
      <div class="tag-list">
        <div v-for="tag in data.tags" class="tag">#{{tag}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'data'
  ]
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.member {
  display: inline;
  overflow: hidden;
  width: calc(100% / 7);
  box-sizing: border-box;
  position: relative;
  padding: 20px;

  .picture {
    width: 100%;
    vertical-align: middle;
    filter: brightness(100%);
    transition: filter 0.3S;
    border-radius: 50%;
  }

  &:hover {
    .overlay {
      display: flex;
    }

    .picture {
      filter: brightness(30%);
    }
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 20px;
    box-sizing: border-box;

    .name {
      color: white;
      text-align: center;
      font-size: 18px;
      padding: 0 10px;
      padding-bottom: 10px;
    }

    .tag-list {
      justify-content: space-around;
      overflow-y: auto;

      .tag {
        color: white;
        margin: 2px;
        font-size: 12px;
        padding: 2px 4px;
      }
    }

    .social-networks {
      display: flex;
      float: right;
      padding-bottom: 10px;
      .link {
        height: 30px;
        width: 30px;
        display: block;
        margin: 5px;
        .logo {
          height: 100%;
        }
      }
    }
  }
}

@media (max-width: 1500px) {
  .member {
    width: calc(100% / 6);
  }
}

@media (max-width: 1300px) {
  .member {
    width: calc(100% / 5);
  }
}

@media (max-width: 1100px) {
  .member {
    width: 25%;
  }
}

@media (max-width: 700px) {
  .member {
    width: calc(100% / 3);
  }
}

@media (max-width: 500px) {
  .member {
    width: 50%;
  }

  .tag-list {
    display: none;
  }
}
</style>
