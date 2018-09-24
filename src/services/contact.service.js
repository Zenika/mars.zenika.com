import config from '../config/config'
import axios from 'axios'

export default {
  sendMail (data) {
    return axios.post(`${config.MAIL_API_URL}`, data)
  }
}
