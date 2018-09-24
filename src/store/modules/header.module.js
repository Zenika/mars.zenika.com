import apiService from '@/services/api.service'

export default {
  namespaced: true,
  state: {
    title: '',
    subtitle: '',
    sentences: []
  },
  mutations: {
    fillData (state, data) {
      state.title = data.title
      state.subtitle = data.subtitle
      state.sentences = data.typewriter
    }
  },
  actions: {
    fillData ({commit}) {
      return apiService.getHeaderData().then(([data]) => {
        commit('fillData', data)
        return data
      })
    }
  }
}
