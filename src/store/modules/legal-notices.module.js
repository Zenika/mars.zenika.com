import apiService from '@/services/api.service'

export default {
  namespaced: true,
  state: {
    sections: []
  },
  mutations: {
    fillData (state, sections) {
      state.sections = sections
    }
  },
  actions: {
    fillData ({commit}) {
      return apiService.getLegalNoticesData().then(sections => {
        commit('fillData', sections)
        return sections
      })
    }
  }
}
