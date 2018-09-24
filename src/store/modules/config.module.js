import apiService from '@/services/api.service'

export default {
  namespaced: true,
  state: {
    agencyName: '',
    agencyCreationYear: '',
    showTeamPage: '0',
    showOpensourcePage: '0',
    showZenboxPage: '0',
    showEventsPage: '0',
    showTrainingPage: '0',
    showJobsPage: '0',
    showContactPage: '0'
  },
  mutations: {
    fillData (state, data) {
      state.agencyName = data.agencyname
      state.agencyCreationYear = data.agencycreationyear
      state.showTeamPage = data.showteampage
      state.showOpensourcePage = data.showopensourcepage
      state.showZenboxPage = data.showzenboxpage
      state.showEventsPage = data.showeventspage
      state.showTrainingPage = data.showtrainingpage
      state.showJobsPage = data.showjobspage
      state.showContactPage = data.showcontactpage
    }
  },
  getters: {
    pages (state) {
      return {
        team: state.showTeamPage === '1',
        opensource: state.showOpensourcePage === '1',
        zenbox: state.showZenboxPage === '1',
        events: state.showEventsPage === '1',
        training: state.showTrainingPage === '1',
        jobs: state.showJobsPage === '1',
        contact: state.showContactPage === '1'
      }
    }
  },
  actions: {
    async fillData ({ commit }) {
      return commit('fillData', await apiService.getConfigData().then(([data]) => data))
    }
  }
}
