import apiService from '@/services/api.service'
import miscellaneousService from '@/services/miscellaneous.service'

export default {
  namespaced: true,
  state: {
    items: null
  },
  mutations: {
    fillData (state, testimonials) {
      state.items = testimonials
    }
  },
  actions: {
    fillData ({commit}) {
      return Promise.all([
        apiService.getTestimonialsData(),
        apiService.getTestimonialsPictureFiles()
      ]).then(([testimonials, testimonialsPictureFiles]) => {
        miscellaneousService.populateTestimonialsGDrivePictureId(testimonials, testimonialsPictureFiles)
        commit('fillData', testimonials)
        return [testimonials, testimonialsPictureFiles]
      })
    }
  }
}
