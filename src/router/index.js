import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import ZenboxPage from '@/components/zenbox/ZenboxPage'
import OpensourcePage from '@/components/opensource/OpenSourcePage'
import FormationPage from '@/components/formation/FormationPage'
import TeamPage from '@/components/team/TeamPage'
import EventsPage from '@/components/events/EventsPage'
import ContactPage from '@/components/contact/ContactPage'
import LegalNoticesPage from '@/components/legal-notices/LegalNoticesPage'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'landingPage',
    component: LandingPage
  },
  {
    path: '/zenbox',
    name: 'zenbox',
    component: ZenboxPage
  },
  {
    path: '/opensource',
    name: 'opensource',
    component: OpensourcePage
  },
  {
    path: '/team',
    name: 'team',
    component: TeamPage
  },
  {
    path: '/events',
    name: 'events',
    component: EventsPage
  },
  {
    path: '/formation',
    name: 'formation',
    component: FormationPage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/legal-notices',
    name: 'legalNotices',
    component: LegalNoticesPage
  }]
})
