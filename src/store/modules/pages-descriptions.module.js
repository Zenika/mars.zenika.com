import apiService from '@/services/api.service'

export default {
  namespaced: true,
  state: {
    // opensourceDescription: '',
    introductionDescription: '',
    twitterUrl: null,
    realisationDescription: '',
    adviseDescription: '',
    trainningDescription: '',
    zenboxDescription: '',
    teamDescription: ''
  },
  mutations: {
    fillData (state, data) {
      state.introductionDescription = data.introductiondescription
      state.twitterUrl = data.introductiontwitterurl
      state.realisationDescription = data.introductionrealisation
      state.adviseDescription = data.introductionadvise
      state.trainningDescription = data.introductiontrainning
      state.zenboxDescription = data.zenboxdescription
      state.teamDescription = data.teamdescription
      // state.opensourceDescription = data.opensourcedescription
    }
  },
  actions: {
    fillData ({commit}) {
      return apiService.getPagesDescriptionsData().then(([data]) => {
        commit('fillData', data)
        return data
      })
    }
  }
}
