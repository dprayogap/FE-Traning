import api from '@/utils/http-api'

export default {
  fetchProfile (config) {
    const path = '/example-api/profile'
    return api.getRequest(path, config)
  }
}
