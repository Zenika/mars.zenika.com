import apiService from '@/services/api.service'
import miscellaneousService from '@/services/miscellaneous.service'
import moment from 'moment'

export default {
  namespaced: true,
  state: {
    events: [],
    eventsSearch: '',
    eventsCounter: {
      nightclazz: 0,
      talk: 0,
      codelab: 0,
      matinale: 0
    },
    organisations: [],
    eventTypes: [
      { selected: false, data: 'Nightclazz' },
      { selected: false, data: 'Matinale' },
      { selected: false, data: 'Talk' },
      { selected: false, data: 'Codelab' }
    ]
  },
  getters: {
    eventsPast (state) {
      const currDate = new Date()
      return state.events.filter(event => event.datestart.toDate() <= currDate)
    },
    filteredEvents (state) {
      const currDate = new Date()
      const dateFilter = event => moment(event.datestart, 'DD-MM-YYYY HH:mm').toDate() >= currDate
      const selectFilter = event => state.eventTypes.find(type => type.data === event.type).selected
      const clean = (value) => value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

      const hasSelected = state.eventTypes.find(type => type.selected)

      return state.events
        .filter(dateFilter)
        .filter(hasSelected ? selectFilter : () => true)
        .filter(event => {
          const search = clean(state.eventsSearch)

          return search === '' ? true : clean(event.title).indexOf(search) > -1
        })
    }
  },
  mutations: {
    fillData (state, [events, eventsCounter, organisations]) {
      state.events = events
      state.eventsCounter = eventsCounter
      state.organisations = organisations
    },
    searchEvent (state, value) {
      state.eventsSearch = value
    }
  },
  actions: {
    fillData ({commit}) {
      return Promise.all([
        apiService.getEventsData(),
        apiService.getEventsCounterData(),
        apiService.getOrganisationsData(),
        apiService.getOrganisationsPictureFiles()
      ]).then(([events, [eventsCounter], organisations, organisationsPictureFiles]) => {
        miscellaneousService.buildEventsDateFormat(events)
        miscellaneousService.populateOrganisationsGDrivePictureId(organisations, organisationsPictureFiles)

        // Convert spreadheet data to numbers
        eventsCounter.nightclazz = +eventsCounter.nightclazz
        eventsCounter.talk = +eventsCounter.talk
        eventsCounter.matinale = +eventsCounter.matinale
        eventsCounter.codelab = +eventsCounter.codelab

        commit('fillData', [events, eventsCounter, organisations])
        return [events, eventsCounter, organisations, organisationsPictureFiles]
      })
    }
  }
}
