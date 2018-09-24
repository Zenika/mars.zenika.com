<template>
  <div class="header">
    <img data-wow-delay="1.2s" class="fractal-img wow fadeInUp rythm-bass" src="static/assets/img/fractal2.png" />
    <div class="header-content">
      <h1 class="title wow fadeInUp rythm-bass" data-wow-delay="1s">{{title}}</h1>
      <hr class="hr wow fadeInUp rythm-bass" data-wow-delay="0.5s">
      <h2 class="subtitle wow fadeInUp rythm-bass" data-wow-delay="0.8s">{{subtitle}}</h2>
      <typewriter :sentences="sentences" class="typed wow fadeInUp" data-wow-delay="1.1s"></typewriter>
      <object id="agency-svg" class="agency-svg" type="image/svg+xml" data="static/assets/img/mars.svg"></object>
    </div>
    <img data-wow-delay="1.2s" class="fractal-img wow fadeInUp rythm-bass" src="static/assets/img/fractal1.png" />

    <img class="down-arrow pointer" v-scroll-to="'#introduction'" src="static/assets/img/down-arrow.png" />
  </div>
</template>

<script>
import Vivus from 'vivus'
import { mapState } from 'vuex'
import Typewriter from '@/components/shared/Typewriter'

export default {
  mounted () {
    /* eslint-disable no-new */
    new Vivus('agency-svg', { duration: 200 })
  },
  computed: mapState('header', ['title', 'subtitle', 'sentences']),
  components: {
    Typewriter
  }
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 40px;

  .header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .fractal-img {
    max-width: 250px;
    height: auto;
    width: auto;
    margin: 0 50px;

    @media (max-width: 960px) {
      display: none;
    }
  }

  .title {
    color: $zenika-color;
    font-size: $header-title-font-size;
    font-family: "AmericanClassicBold";
    line-height: 1;
    margin: 0px;
  }

  .hr {
    width: 50px;
    border-width: 0 0 3px;
    border-color: $zenika-color;
  }

  .subtitle {
    color: white;
    font-size: $header-subtitle-font-size;
    margin: 0;
    text-align: center;
  }

  .typed {
    margin: 0px 0px 20px 0px;
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
      opacity: 1\9;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadeIn {
    from {
      opacity: 0;
      opacity: 1\9;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      opacity: 1\9;
    }
    to {
      opacity: 1;
    }
  }

  .fade-in {
    opacity: 0;
    -webkit-animation: fadeIn ease-in 1;
    -moz-animation: fadeIn ease-in 1;
    animation: fadeIn ease-in 1;

    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    animation-duration: 1s;

    -webkit-animation-delay: 0.5s;
    -moz-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }

  .agency-svg {
    height: $header-svg-height;
  }

  .down-arrow {
    height: 40px;
    position: absolute;
    bottom: 3%;
    right: auto;
    left: auto;
  }
}

@media (max-width: 900px) {
  .header {
    .title {
      font-size: $header-title-font-size-mobile;
    }
    .subtitle {
      font-size: $header-subtitle-font-size-mobile;
    }
  }
}
</style>
