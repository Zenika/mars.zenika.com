import apiService from '@/services/api.service'

export default {
  namespaced: true,
  state: {
    domaines: []
  },
  mutations: {
    fillData (state, domaines) {
      state.domaines = domaines
    }
  },
  actions: {
    fillData ({commit}) {
      return apiService.getDomainesData().then((domaines) => {
        commit('fillData', domaines)
        return domaines
      })
    }
  }
}
