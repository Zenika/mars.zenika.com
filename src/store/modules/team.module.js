import apiService from '@/services/api.service'
import miscellaneousService from '@/services/miscellaneous.service'
import shuffle from 'lodash/shuffle'

export default {
  namespaced: true,
  state: {
    members: null
  },
  mutations: {
    fillData (state, members) {
      state.members = members
    }
  },
  getters: {
    membersRandomOrder (state) {
      return shuffle(state.members)
    }
  },
  actions: {
    fillData ({commit}) {
      return Promise.all([
        apiService.getTeamData(),
        apiService.getTeamPictureFiles()
      ]).then(([members, teamPictureFiles]) => {
        miscellaneousService.populateTeamMembersGDrivePictureId(members, teamPictureFiles)
        miscellaneousService.preloadTeamPictures(members)
        commit('fillData', members)
        return [members, teamPictureFiles]
      })
    }
  }
}
