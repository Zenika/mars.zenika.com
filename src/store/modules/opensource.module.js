import apiService from '@/services/api.service'

export default {
  namespaced: true,
  state: {
    projects: []
  },
  mutations: {
    fillData (state, projects) {
      state.projects = projects
    }
  },
  actions: {
    fillData ({commit}) {
      return apiService.getOSProjectsData().then(projects => {
        commit('fillData', projects)
        return projects
      })
    }
  }
}
