import config from '../config/config'
import axios from 'axios'

export default {

  /**
   * Fetch files in a drive folder
   * @param {string} folderId
   */
  fetchFolderFiles (folderId) {
    return axios.get(`${config.FILES_API_URL}?q='${folderId}'+in+parents&key=${config.GOOGLE_API_KEY}`)
      .then(res => res.data.files)
  },

  /**
   * Fetch data from a google sheet file name and a range
   */
  fetchData (sheetName, range) {
    return axios.get(`${config.SHEETS_API_URL}/${config.SPREASHEET_ID}/values/${sheetName}!${range}?key=${config.GOOGLE_API_KEY}`)
      .then(res => {
        // Check if response contains data
        res = res.data.values

        // Build the 'array' columns and convert to a list of json objects
        res = this.buildArrayColumns(res)
        res = this.buildObjFormat(res)

        // Remove the header row
        res.splice(0, 1)

        return res
      })
  },

  /**
   * Get Team picture files
   */
  getTeamPictureFiles () {
    return this.fetchFolderFiles(config.TEAM_PICTURES_FOLDER_ID)
  },

  /**
   * Get Organisations picture files
   */
  getOrganisationsPictureFiles () {
    return this.fetchFolderFiles(config.ORGANISATIONS_PICTURES_FOLDER_ID)
  },

  /**
   * Get Product picture files
   */
  getProductPictureFiles () {
    return this.fetchFolderFiles(config.PRODUCT_PICTURES_FOLDER_ID)
  },

  /**
   * Get Testimonials picture files
   */
  getTestimonialsPictureFiles () {
    return this.fetchFolderFiles(config.TESTIMONIALS_PICTURES_FOLDER_ID)
  },

  /**
   * Get global config data
   */
  getConfigData () {
    return this.fetchData('config', 'A1:I2')
  },

  /**
   * Get landing page header data
   */
  getHeaderData () {
    return this.fetchData('header', 'A1:C2')
  },

  /**
   * Get landing page introduction data
   */
  getPagesDescriptionsData () {
    return this.fetchData('pagesDescriptions', 'A1:Z2')
  },

  /**
   * Get events data
   */
  getEventsData () {
    return this.fetchData('events', 'A1:Z100')
  },

  /**
   * Get legal notices data
   */
  getLegalNoticesData () {
    return this.fetchData('legalNotices', 'A1:Z100')
  },

  /**
   * Get eventsCounter data
   */
  getEventsCounterData () {
    return this.fetchData('eventsCounter', 'A1:D3')
  },

  /**
   * Get opensource projects data
   */
  getOSProjectsData () {
    return this.fetchData('opensource', 'A1:Z100')
  },

  /**
   * Get zenbox data
   */
  getZenboxData () {
    return this.fetchData('zenbox', 'A1:Z100')
  },

  /**
   * Get zenbox data
   */
  getFormationData () {
    return this.fetchData('formation', 'A1:Z100')
  },
  /**
   * Get domaines data
   */
  getDomainesData () {
    return this.fetchData('domaines', 'A1:Z100')
  },

  /**
   * Get testimonials
   */
  getTestimonialsData () {
    return this.fetchData('testimonials', 'A1:Z100').then(testimonials => {
      testimonials.forEach(testimonial => {
        testimonial.picture = this.buildURLPicture(testimonial.picture)
      })
      return testimonials
    })
  },

  /**
   * Get organisations data
   */
  getOrganisationsData () {
    return this.fetchData('organisations', 'A1:Z100').then(organisations => {
      organisations.forEach(orga => {
        orga.picture = this.buildURLPicture(orga.picture)
      })
      return organisations
    })
  },

  /**
   * Get events data
   */
  getTeamData () {
    return this.fetchData('team', 'A1:Z100').then(members => {
      members.forEach(member => {
        member.fullName = `${member.firstname} ${member.lastname}`
        member.picture = this.buildURLPicture(member.picture)
      })
      return members
    })
  },

  /**
   * Get footer data
   */
  getFooterData () {
    return this.fetchData('footer', 'A1:G2')
  },

  /**
  * Build google drive url picture
  */
  buildURLPicture (picId) {
    return `${config.DRIVE_URL}?export=view&id=${picId}&key=${config.GOOGLE_API_KEY}`
  },

  /**
  * Transform the list of array to a list of json objects
  */
  buildObjFormat (rows) {
    return rows.map((row, index) => {
      if (index === 0) return row
      const obj = {}
      rows[0].forEach((headCol, indexHead) => {
        obj[headCol.toLowerCase()] = row[indexHead]
      })
      return obj
    })
  },

  /**
   * Transform the list of array into a list of json objects
   */
  buildArrayColumns (rows) {
    const indexes = []

    // We save indexes of '(array)' columns
    rows[0] = rows[0].map((headCol, index) => {
      if (headCol.includes('(array)')) {
        indexes.push(index)

        // The tag is no longer usefull
        return headCol.replace('(array)', '')
      }
      return headCol
    })

    // Transform '(array)' columns to lists
    return rows.map((row, index) => {
      if (index === 0) return row
      return row.map((col, index) => indexes.indexOf(index) !== -1 ? col.split(';').filter(item => item !== '') : col)
    })
  }
}
