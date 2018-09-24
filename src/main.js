import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import wowjs from 'wowjs'
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'
import moment from 'moment'
import config from './config/config'

moment.locale('fr')

Vue.config.productionTip = false

// Enable wow animations
window.wowjs = new wowjs.WOW({ live: false })
window.wowjs.init()

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease',
  offset: -70,
  onDone: false,
  onCancel: false
})

store.dispatch('fetchAppData').then(() => {
  const agencyName = store.state.config.agencyName

  document.title = `Zenika ${agencyName} : Formations - Conseil - Jobs - Événements`
  console.log(`
  _____          _ _
  |__  /___ _ __ (_) | ____ _
    / // _ \\ '_ \\| | |/ / _\` |
  / /|  __/ | | | |   < (_| |
  /____\\___|_| |_|_|_|\\_\\__,_|

  Tu es développeur ? Viens rejoindre la team ${agencyName} !
  https://jobs.zenika.com/category/${agencyName.toLowerCase()}/`)

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
})
