import Vue from 'vue'
import Vuex from 'vuex'
import miscellaneousService from '@/services/miscellaneous.service'

import config from '@/store/modules/config.module'
import header from '@/store/modules/header.module'
import testimonials from '@/store/modules/testimonials.module'
import footer from '@/store/modules/footer.module'
import events from '@/store/modules/events.module'
import team from '@/store/modules/team.module'
import pagesDescription from '@/store/modules/pages-descriptions.module'
import zenbox from '@/store/modules/zenbox.module'
import opensource from '@/store/modules/opensource.module'
import formation from '@/store/modules/formation.module'
import legalNotices from '@/store/modules/legal-notices.module'
import domaines from '@/store/modules/domaines.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config,
    header,
    testimonials,
    footer,
    events,
    team,
    pagesDescription,
    zenbox,
    opensource,
    formation,
    legalNotices,
    domaines
  },
  state: {
    appDataLoaded: false
  },
  mutations: {
    appDataLoadedToggle (state) {
      state.appDataLoaded = !state.appDataLoaded
    }
  },
  actions: {
    fetchAppData ({ dispatch, commit }) {
      return Promise.all([
        dispatch('config/fillData'),
        dispatch('events/fillData'),
        dispatch('team/fillData'),
        dispatch('formation/fillData'),
        dispatch('opensource/fillData'),
        dispatch('header/fillData'),
        dispatch('testimonials/fillData'),
        dispatch('footer/fillData'),
        dispatch('pagesDescription/fillData'),
        dispatch('legalNotices/fillData'),
        dispatch('zenbox/fillData'),
        dispatch('domaines/fillData')
      ]).then(([config, [events], [team], formation, osProjects]) => {
        miscellaneousService.populateEventsSpeakers(events, team)
        miscellaneousService.populateFormationTrainer(formation, team)
        miscellaneousService.populateOSProjectsOwners(osProjects, team)

        commit('appDataLoadedToggle')
      })
    }
  }
})
