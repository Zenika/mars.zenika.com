import apiService from '@/services/api.service'

export default {
  namespaced: true,
  state: {
    zenboxItems: [],
    zenboxCategories: [
      {
        name: 'Talks',
        description: 'Les talks sont le format idéal pour découvrir un sujet sous forme de conférence.',
        icon: '/static/assets/img/talk.png',
        image: '/static/assets/img/speaker.jpg'
      },
      {
        name: 'Codelabs',
        description: 'Découvrir par la pratique : un atelier concret pour se former sur les bases d\'une technologie.',
        icon: '/static/assets/img/codelab.png',
        image: '/static/assets/img/codelab.jpg'
      },
      {
        name: 'Barcamps',
        description: 'Un BarCamp est une rencontre, une non-conférence ouverte, qui prend la forme d\'ateliers-événements participatifs',
        icon: '/static/assets/img/barcamp.png',
        image: '/static/assets/img/barcamp.jpg'
      }
    ],
    selectedZenboxCategoryIndex: 0,
    selectedZenboxIndex: 0
  },
  getters: {
    filteredZenboxItems (state) {
      return state.zenboxItems.filter(zenboxItem => zenboxItem.category === state.zenboxCategories[state.selectedZenboxCategoryIndex].name)
    }
  },
  mutations: {
    fillData (state, zenboxItems) {
      state.zenboxItems = zenboxItems
    },
    selectZenboxCategory (state, index) {
      state.selectedZenboxCategoryIndex = index
      state.selectedZenboxIndex = 0
    },
    selectZenboxItem (state, index) {
      state.selectedZenboxIndex = index
    }
  },
  actions: {
    fillData ({
      commit
    }) {
      return apiService.getZenboxData().then(zenboxItems => {
        commit('fillData', zenboxItems)
        return zenboxItems
      })
    },
    selectZenboxCategory ({
      commit,
      state
    }, index) {
      if (state.selectedZenboxCategoryIndex !== index) {
        commit('selectZenboxCategory', index)
      }
    },
    selectZenboxItem ({
      commit
    }, index) {
      commit('selectZenboxItem', index)
    }
  }
}
