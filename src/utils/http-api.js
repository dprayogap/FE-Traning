import axios from 'axios'

export default {
  getRequest (path, config) {
    return axios.get(path, config)
  },

  postRequest (path, data, config) {
    return axios.post(path, data, config)
  }
}
