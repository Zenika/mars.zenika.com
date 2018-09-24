<template>
  <div v-if="data" class="pic-wrapper">
    <img :class="[{'black-filter': blackFilter}, 'pic']" :src="data.picture">
    <div v-if="showSocialNetworks" class="links">
      <a v-if="data.twitter" :href="data.twitter" class="link">
        <img class="logo pointer" src="static/assets/img/twitter.svg" target="_blank">
      </a>
      <a v-if="data.github" :href="data.github" class="link" target="_blank">
        <img class="logo pointer" src="static/assets/img/github.svg">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {},
    showSocialNetworks: {
      default: true
    },
    blackFilter: {
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.pic-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 50%;

  &:hover {
    .links {
      opacity: 1;
    }
  }

  .links {
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transition: opacity 0.3s;
    background-color: rgba(128, 180, 227, 0.9);
    border-radius: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .link {
      height: 30%;
      width: 30%;

      .logo {
        height: 100%;
      }
    }
  }

  .pic {
    height: auto;
    width: 100%;
    border-radius: 50%;
    filter: brightness(1);
    -webkit-transition: filter 0.5s;
    transition: filter 0.5s;

    &.black-filter {
      filter: brightness(0.2)
    }
  }
}
</style>
