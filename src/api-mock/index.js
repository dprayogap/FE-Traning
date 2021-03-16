import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import routesData from './routes-data'

const mock = new MockAdapter(axios)

const methodMap = {
  GET: 'onGet',
  POST: 'onPost',
  PUT: 'onPut',
  DELETE: 'onDelete'
}

function applyMock (routes) {
  routes.forEach(r => {
    const params = [r.url]
    switch (r.method) {
      case 'GET': params.push({ params: r.param_values })
        break
      case 'PUT':
      case 'POST': params.push(r.param_values)
        break
    }
    mock[methodMap[r.method]](...params).reply(() => {
      const { url, method, status, response } = r
      console.log('Request: ', `[${method}] ${url}`,
        `Status: ${status}`,
        'Response: ', response)
      return [status || 200, response]
    })
  })
}

applyMock(routesData)
