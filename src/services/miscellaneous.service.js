import moment from 'moment'
import config from '../config/config'
import imgPreload from './img-preload.service'

export default {

  norm (str) {
    return str.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s/g, '').toLowerCase()
      .replace(/\.[^/.]+$/, '')
  },

  /**
   * Hydrate events with team objects
   */
  populateEventsSpeakers (events, team) {
    events.forEach(event => {
      event.speakers = event.speakers.map(speakerName => {
        return team.find(member => this.norm(member.fullName) === this.norm(speakerName))
      })
    })
  },

  /**
   * Hydrate opensource projects with team objects
   */
  populateOSProjectsOwners (osProjects, team) {
    osProjects.forEach(osProject => {
      osProject.owners = osProject.owners.map(ownerName => {
        return team.find(member => this.norm(member.fullName) === this.norm(ownerName))
      })
    })
  },

  /**
   * Hydrate formations with team objects
   */
  populateFormationTrainer (formations, team) {
    formations.forEach(formation => {
      formation.trainer = formation.trainer.map(trainerName => {
        return team.find(member => this.norm(member.fullName) === this.norm(trainerName))
      })
    })
  },

  /**
   * Hydrate team members with their url drive profile picture
   */
  populateTeamMembersGDrivePictureId (members, files) {
    members.forEach(member => {
      const file = files.find(file => this.norm(member.fullName) === this.norm(file.name))

      if (file) {
        member.picture = `${config.DRIVE_URL}?export=view&id=${file.id}&key=${config.GOOGLE_API_KEY}`
      }
    })
  },

  /**
   * Hydrate testimonials with their url drive picture
   */
  populateTestimonialsGDrivePictureId (testimonials, files) {
    testimonials.forEach(testimonial => {
      const file = files.find(file => this.norm(testimonial.author) === this.norm(file.name))

      if (file) {
        testimonial.picture = `${config.DRIVE_URL}?export=view&id=${file.id}&key=${config.GOOGLE_API_KEY}`
      }
    })
  },

  /**
   * Hydrate organisations with their url drive picture
   */
  populateOrganisationsGDrivePictureId (organisations, files) {
    organisations.forEach(organisation => {
      const file = files.find(file => this.norm(organisation.name) === this.norm(file.name))

      if (file) {
        organisation.picture = `${config.DRIVE_URL}?export=view&id=${file.id}&key=${config.GOOGLE_API_KEY}`
      }
    })
  },

  /**
   * Hydrate product with their url drive picture
   */
  populateProductsGDrivePictureId (products, files) {
    products.forEach(product => {
      const file = files.find(file => this.norm(product.product) === this.norm(file.name))

      if (file) {
        product.picture = `${config.DRIVE_URL}?export=view&id=${file.id}&key=${config.GOOGLE_API_KEY}`
      }
    })
  },

  /**
   * Preload team pictures
   */
  preloadTeamPictures (members) {
    members.forEach(member => {
      imgPreload(member.picture)
    })
  },

  /**
   * Transform events date into a correct format
   */
  buildEventsDateFormat (events) {
    events.forEach(event => {
      event.datestart = moment(event.datestart, 'DD-MM-YYYY HH:mm')
      event.dateend = moment(event.dateend, 'DD-MM-YYYY HH:mm')
    })
  },

  /**
   * Init twitter feed script for within an HTML node
   * @param {string} elementClassName
   */
  appendTwitterScriptToHTML (elementClassName) {
    const twitterScript = document.createElement('script')
    twitterScript.setAttribute('src', '//platform.twitter.com/widgets.js')
    twitterScript.setAttribute('charset', 'utf-8')
    const elem = document.getElementsByClassName(elementClassName)
    if (elem && elem[0]) {
      elem[0].appendChild(twitterScript)
    }
  }
}
