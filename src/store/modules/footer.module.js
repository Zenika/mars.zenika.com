import apiService from '@/services/api.service'

export default {
  namespaced: true,
  state: {
    data: null
  },
  mutations: {
    fillData (state, data) {
      state.data = data
    }
  },
  actions: {
    fillData ({commit}) {
      return apiService.getFooterData().then(([data]) => {
        commit('fillData', data)
        return data
      })
    }
  }
}
