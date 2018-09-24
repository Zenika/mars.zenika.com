var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

require('dotenv').config()

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GOOGLE_API_KEY: JSON.stringify(process.env.GOOGLE_API_KEY),
  SPREASHEET_ID: JSON.stringify(process.env.SPREASHEET_ID),
  TEAM_PICTURES_FOLDER_ID: JSON.stringify(process.env.TEAM_PICTURES_FOLDER_ID),
  ORGANISATIONS_PICTURES_FOLDER_ID: JSON.stringify(process.env.ORGANISATIONS_PICTURES_FOLDER_ID),
  PRODUCT_PICTURES_FOLDER_ID: JSON.stringify(process.env.PRODUCT_PICTURES_FOLDER_ID),
  TESTIMONIALS_PICTURES_FOLDER_ID: JSON.stringify(process.env.TESTIMONIALS_PICTURES_FOLDER_ID),
  ANALYTICS_KEY: JSON.stringify(process.env.ANALYTICS_KEY)
})
