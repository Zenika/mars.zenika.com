<template>
  <div class="section-events">
    <div class="flex-align stats-title">
      <h1 class="subtitle">Événements joués depuis {{agencyCreationYear}}</h1>
    </div>
    <div class="stats">
      <div class="events-stats">
        <events-counter class="counter" :label="'Nightclazz'" :id="'nightclazz'" :eventsCounter="eventsPast.filter(event => event.type === 'Nightclazz').length + eventsCounter.nightclazz"></events-counter>
        <events-counter class="counter" :label="'Matinales'" :id="'matinale'" :eventsCounter="eventsPast.filter(event => event.type === 'Matinale').length + eventsCounter.matinale"></events-counter>
        <events-counter class="counter" :label="'Talks'" :id="'talks'" :eventsCounter="eventsPast.filter(event => event.type === 'Talk').length + eventsCounter.talk"></events-counter>
        <events-counter class="counter" :label="'Codelabs'" :id="'codelab'" :eventsCounter="eventsPast.filter(event => event.type === 'Codelab').length + eventsCounter.codelab"></events-counter>
      </div>
    </div>
    <div class="flex-align events-title">
      <h1 class="subtitle">Événements à venir</h1>
    </div>
    <div class="filter-wrapper">
      <div class="filter">
        <chip
          v-for="eventType in eventTypes"
          @click.native="toggleSelected(eventType)"
          :color="color(eventType.data)"
          :isDisabled="!eventType.selected"
          :key="eventType.data"
        >{{ eventType.data }}</chip>
      </div>
      <div class="filter-search-wrapper">
        <input class="filter-search" type="search" placeholder="Trouver un événement" v-model="search" />
        <i class="filter-search-icon material-icons">search</i>
      </div>
    </div>
    <div class="events-list">
      <div v-for="event in filteredEvents" class="event-wrapper" :key="event.title">
        <event-item class="event-item" :data="event"></event-item>
      </div>
    </div>
    <p class="no-events" v-if="!filteredEvents.length">Aucun évenement disponible pour le moment.</p>

    <div v-if="organisations" class="organisations-list">
      <organisation-item v-for="orga in organisations" :data="orga" :key="orga.name"></organisation-item>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import EventItem from '@/components/events/EventItem'
import Chip from '@/components/shared/Chip'
import OrganisationItem from '@/components/events/OrganisationItem'
import EventsCounter from '@/components/events/EventsCounter'
import eventMixin from '@/mixins/event.mixin'

export default {
  data () {
    return {
      todayDate: new Date()
    }
  },
  mixins: [eventMixin],
  methods: {
    ...mapMutations('events', ['searchEvent']),
    toggleSelected (eventType) {
      eventType.selected = !eventType.selected
    }
  },
  computed: {
    ...mapGetters('events', [
      'eventsPast',
      'filteredEvents'
    ]),
    ...mapState('events', [
      'organisations',
      'eventTypes',
      'eventsCounter',
      'eventsSearch'
    ]),
    ...mapState('config', [
      'agencyCreationYear'
    ]),
    search: {
      get () {
        return this.eventsSearch
      },
      set (newSearch) {
        this.searchEvent(newSearch)
      }
    }
  },
  components: {
    EventItem,
    Chip,
    OrganisationItem,
    EventsCounter
  }
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.section-events {
  width: 100%;
  min-height: 100vh;

  .stats {
    margin-bottom: 40px;
  }

  .events-title {
    justify-content: center;
  }

  .stats-title {
    padding-bottom: 30px;

    &.flex-align {
      justify-content: center;

      .subtitle {
        padding-top: 100px;
        text-align: center;
        padding-bottom: 0px;
        display: inline;
      }
    }
  }

  .filter-wrapper {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    align-items: center;
    flex-direction: column;
  }
  .filter {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;

    .chip {
      margin: 30px 20px;

      @media (max-width: 670px) {
        margin: 0 10px 20px 10px;
      }
    }
  }
  .filter-search-wrapper {
    position: relative;
  }
  .filter-search {
    background-color: transparent;
    border: 1px solid white;
    padding: 5px 20px;
    color: white;
    height: 37px;
    padding-left: 37px;
    min-width: 300px;
    font-size: 18px;
  }
  .filter-search-icon {
    position: absolute;
    top: 50%;
    left: 6px;
    transform: translateY(-50%);
  }

  .events-list {
    column-width: $events-list-column-width;
    column-gap: 15px;
    width: 90%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .event-wrapper {
      padding: 20px;
      -webkit-column-break-inside: avoid;
      break-inside: avoid;
      page-break-inside: avoid;
      width: 400px;
      max-width: 500px;
      flex-grow: 2;

      @media (max-width: 540px) {
        padding-top: 0;
      }
    }

    @media (max-width: 982px) {
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
    @media (max-width: 540px) {
      padding: 0;
    }
  }

  .no-events {
    text-align: center;
    width: 100%;
  }

  .organisations-list {
    background-color: rgba(255, 255, 255, 0.7);
    justify-content: space-around;
    margin: auto;
    margin-top: 60px;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    padding: 20px;
  }

  .events-stats {
    margin: auto;
    margin-top: 20px;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  @media (max-width: 1100px) {
    .events-stats {
      width: 80%;
    }
  }

  @media (max-width: 700px) {
    .events-stats {
      width: 90%;
    }
  }
}
</style>
