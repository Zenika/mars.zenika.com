<template>
  <div class="nav-bar" :class="{ 'nav-bar--scrolled': !hasTransparency() }">
    <div v-show="isReduced" class="nav-bar-reduced">
      <router-link to="/">
        <img src="static/assets/img/logo.png" class="nav-bar-reduced-logo pointer">
      </router-link>
      <svg v-on:click="expanded = !expanded" class="nav-bar-reduced-icon pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M0 3h50v2H0zM0 17h50v2H0zM0 31h50v2H0zM0 45h50v2H0z"/>
      </svg>
    </div>

    <ul v-if="!isReduced | expanded" class="nav-bar-links">
      <li v-on:click="expanded = !expanded">
        <router-link to="/" class="nav-bar-logo-link pointer">
          <img class="nav-bar-logo" :src="!hasTransparency() ? 'static/assets/img/logo.png' : 'static/assets/img/logo-white.png'">
        </router-link>
      </li>
      <li v-on:click="expanded = !expanded" v-if="pages.training">
        <router-link active-class="nav-bar-link--active" class="nav-bar-link" to="formation">Formations</router-link>
      </li>
      <li v-on:click="expanded = !expanded" v-if="pages.events">
        <router-link active-class="nav-bar-link--active" class="nav-bar-link" to="events">Événements</router-link>
      </li>
      <li v-on:click="expanded = !expanded" v-if="pages.zenbox">
        <router-link active-class="nav-bar-link--active" class="nav-bar-link" to="zenbox">Zenbox</router-link>
      </li>
      <li v-on:click="expanded = !expanded" v-if="pages.opensource">
        <router-link active-class="nav-bar-link--active" class="nav-bar-link" to="opensource">Open Source</router-link>
      </li>
      <li v-on:click="expanded = !expanded" v-if="pages.team">
        <router-link active-class="nav-bar-link--active" class="nav-bar-link" to="team">L'Équipe</router-link>
      </li>
      <li v-on:click="expanded = !expanded" v-if="pages.jobs">
        <a class="nav-bar-link" target="_blank" :href="'https://jobs.zenika.com/nos-offres'">Jobs</a>
      </li>
      <li v-on:click="expanded = !expanded" v-if="pages.contact">
        <router-link active-class="nav-bar-link--active" class="nav-bar-link" to="contact">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import ImgPreload from '@/services/img-preload.service'
import config from '@/config/config'
import { mapGetters, mapState } from 'vuex'

export default {
  data () {
    return {
      isPageScrolled: false,
      expanded: false,
      isReduced: false,
      currentPath: null
    }
  },
  methods: {
    checkMediaWidth () {
      this.isReduced = window.innerWidth <= config.SCREEN_WIDTH_NAVBAR_REDUCED
    },
    hasTransparency () {
      return (
        !this.isPageScrolled &&
        this.currentPath === '/' &&
        this.isReduced === false
      )
    }
  },
  computed: {
    ...mapState('config', ['agencyName']),
    ...mapGetters('config', ['pages'])
  },
  mounted () {
    // Used to change navbar style beyond a lvl of scroll
    window.addEventListener('scroll', () => {
      this.isPageScrolled = window.scrollY > config.NAVBAR_SCROLLED
    })

    // Used to set the navbar status depending on the window size
    window.addEventListener('resize', this.checkMediaWidth)

    this.checkMediaWidth()

    // Preload logo white version to avoid delay on navbar transition
    ImgPreload('static/assets/img/logo-white.png')

    this.currentPath = this.$router.history.current.path
    this.$router.afterEach(route => {
      this.currentPath = route.path
      window.scroll(0, 0)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.nav-bar {
  margin-top: -$nav-bar-item-marg-top;
  padding-top: $nav-bar-item-marg-top;
  position: fixed;
  top: 0;
  transform: translate3d(0, $nav-bar-item-marg-top, 0);
  transition: all 0.8s;
  width: 100%;
  z-index: 1000;
}

.nav-bar--scrolled {
  background-color: white;
  padding-top: $nav-bar-item-marg-top;
  transform: translate3d(0, 0, 0);
}

// Mobile nav bar
.nav-bar-reduced {
  align-items: center;
  background-color: white;
  border-bottom: 1px solid $zenika-color;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}

.nav-bar-reduced-logo {
  display: block;
  height: 40px;
  margin-left: $nav-bar-item-pad-side;
  margin-right: $nav-bar-item-pad-side;
  margin-left: 30px;
}

.nav-bar-reduced-icon {
  fill: $zenika-color;
  height: 30px;
  margin-right: 30px;
}

.nav-bar-logo {
  display: block;
  height: 40px;
  margin-left: $nav-bar-item-pad-side;
  margin-right: $nav-bar-item-pad-side;
}

.nav-bar-logo-link {
  display: flex;
}

.nav-bar-links {
  list-style-type: none;
  display: flex;
  align-items: center;
  background: transparent;
  justify-content: center;
  padding-top: $nav-bar-item-marg-top;
  margin: 0;
  padding: 10px 0;
}

.nav-bar-link {
  text-decoration: none;
  color: white;
  transition: color 0.4s;
  cursor: pointer;
  margin-left: $nav-bar-item-pad-side;
  margin-right: $nav-bar-item-pad-side;
  font-size: $nav-bar-font-size;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

.nav-bar--scrolled .nav-bar-link {
  color: $zenika-color;

  &:before {
    background-color: $zenika-color;
  }
}

.nav-bar-link--active:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

@media (max-width: 1280px) {
  .nav-bar-link {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
  }
}

@media (max-width: 1000px) {
  .nav-bar-link {
    margin-left: 18px;
    margin-right: 18px;
    font-size: 18px;
  }
}

@media (max-width: 900px) {
  .nav-bar-links {
    flex-direction: column;
    background-color: white;
    padding-top: 10px;
    align-items: initial;
  }

  .nav-bar-link {
    display: block;
    font-size: $nav-bar-font-size;
    padding: 10px 40px 10px 40px;
    margin: 0;

    &:before {
      display: none;
    }
  }

  .nav-bar--scrolled .nav-bar-link--active {
    background-color: $zenika-color;
    color: #ffffff;
  }
  .nav-bar-logo {
    display: none;
  }
}
</style>
