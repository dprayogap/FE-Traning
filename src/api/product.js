import api from '@/utils/http-api'

export default {
  fetchProducts (config) {
    const path = '/example-api/product'
    return api.getRequest(path, config)
  },

  createProduct (data) {
    const path = '/example-api/product'
    return api.postRequest(path, data)
  },

  updateProduct (code, data) {
    const path = `/example-api/product/${encodeURIComponent(code)}`
    return api.putRequest(path, data)
  },

  deleteProduct (code, data) {
    const path = `/example-api/product/${encodeURIComponent(code)}`
    return api.deleteRequest(path, data)
  }
}
