import api from '@/utils/http-api'

export default {
  fethProfile (config) {
    const path = 'https://my-json-server.typicode.com/typicode/demo/profile'
    return api.getRequest(path, config)
  }
}
