<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div v-if="backgroundImg" class="background" :style="{ 'background-image': 'url(' + backgroundImg + ')' }"></div>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import AppFooter from '@/components/footer/AppFooter'
import config from '@/config/config'
import imgPreload from '@/services/img-preload.service'
import mp3 from '@/../static/assets/audio/bensound-energy.mp3'
import Rythm from 'rythm.js'

const allowedKeys = { 37: 'left', 38: 'up', 39: 'right', 40: 'down', 65: 'a', 66: 'b' }
const konamiSequence = [ 'up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a' ]

let konamiCodePosition = 0
let rythm

export default {
  name: 'app',
  components: {
    NavBar,
    AppFooter
  },
  data () {
    return {
      backgroundImg: null
    }
  },
  mounted () {
    imgPreload(config.HEADER_BG_URL)
      .then(backgroundImg => {
        this.backgroundImg = backgroundImg
      })

    document.addEventListener('keydown', e => {
      if (e.keyCode === 80) {
        rythm.stop()
        return
      }

      if (allowedKeys[e.keyCode] !== konamiSequence[konamiCodePosition]) {
        konamiCodePosition = 0
        return
      }

      konamiCodePosition++
      if (konamiCodePosition === konamiSequence.length) {
        if (rythm) {
          rythm.stop()
        }

        rythm = new Rythm()
        rythm.setMusic(mp3)
        rythm.start()
        konamiCodePosition = 0
      }
    })
  },
  destoyed () {
    rythm.stop()
  }
}
</script>

<style lang="scss">
@import '~wowjs/css/libs/animate.css';
@import '~variables/vars.scss';

@font-face {
    font-family: 'AmericanClassicBold';
    src: url('../static/assets/fonts/AmericanClassicBold.ttf');
}

body,
html {
  margin: 0;

  #app {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    font-size: 18px;

    .pointer {
      cursor: pointer;
    }

    .page-title {
      text-align: center;
      padding-top: 120px;
      margin: 0;
      margin-bottom: 30px;
      font-size: $section-title-size;

      @media (max-width: 1030px) {
        font-size: $section-title-size-mobile;
      }
    }

    .page-sub-title {
      font-size: $section-subtitle-size;

      @media (max-width: 1030px) {
        font-size: $section-subtitle-size-mobile;
      }
    }

    .page-description {
      width: 50%;
      margin: 0 auto;
      padding: 20px;
      padding-bottom: 60px;
    }

    .background {
      width: 100%;
      height: 100%;
      position: fixed;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      z-index: -1;
    }
  }

  /* Global style */
  .tag-list {
    display: flex;
    flex-flow: row wrap;

    .tag {
      margin-right: 20px;
      background-color: rgba(128, 180, 227, 0.6);
      padding: 5px 15px;
    }
  }

  .flex-align {
    display: flex;
    align-items: center;
  }

  /* Enable nice scrollbar :) */
   ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
   ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
   ::-webkit-scrollbar-thumb {
    background: $light-grey-color;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
   ::-webkit-scrollbar-thumb:hover {
    background: $light-grey-color;
  }
   ::-webkit-scrollbar-thumb:active {
    background: $light-grey-color;
  }
   ::-webkit-scrollbar-track {
    background: #ffffff;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
   ::-webkit-scrollbar-track:hover {
    background: $grey-color;
  }
   ::-webkit-scrollbar-track:active {
    background: #cdcdcd;
  }
   ::-webkit-scrollbar-corner {
    background: transparent;
  }

  .github-btn {
      display: flex;
      text-decoration: none;
      background-color: #ddd;
      background-image: linear-gradient(to bottom, #fcfcfc 0, #eee 100%);
      border-color: #ccc;
      border: 1px solid #d5d5d5;
      padding: 2px 5px 2px 4px;
      color: #333;
      cursor: pointer;
      overflow: hidden;
      font: 700 11px/14px "Helvetica Neue", Helvetica, Arial, sans-serif;
      text-shadow: 0 1px 0 #fff;
      white-space: nowrap;
      border-radius: 3px;

      &:hover {
        background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);
      }

      img {
        width: 14px;
        height: 14px;
        margin-right: 5px;
      }
    }
}
</style>
