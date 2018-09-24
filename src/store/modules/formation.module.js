import apiService from '@/services/api.service'
import miscellaneousService from '@/services/miscellaneous.service'

export default {
  namespaced: true,
  state: {
    formations: []
  },
  mutations: {
    fillData (state, formations) {
      state.formations = formations
    }
  },
  actions: {
    fillData ({commit}) {
      return Promise.all([
        apiService.getFormationData(),
        apiService.getProductPictureFiles()
      ]).then(([formations, organisationsPictureFiles]) => {
        miscellaneousService.populateProductsGDrivePictureId(formations, organisationsPictureFiles)

        commit('fillData', formations)
        return formations
      })
    }
  }
}
