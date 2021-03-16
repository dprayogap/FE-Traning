export default [
  {
    url: '/example-api/product',
    method: 'GET',
    response: {
      'code': 200,
      'status': 'OK',
      'data': [
        {
          id: 1,
          imgUrl: 'https://placeimg.com/190/190/animals',
          name: 'The quick brown fox jumps over the lazy dog',
          originalPrice: 100000,
          finalPrice: 50000,
          available: false
        }, {
          id: 2,
          imgUrl: 'https://placeimg.com/190/190/animals',
          name: 'The quick brown fox jumps over the lazy dog',
          originalPrice: 500000,
          finalPrice: 250000,
          available: false
        }, {
          id: 3,
          imgUrl: 'https://placeimg.com/190/190/animals',
          name: 'The quick brown fox jumps over the lazy dog',
          originalPrice: 1000000,
          finalPrice: 500000,
          available: true
        }, {
          id: 4,
          imgUrl: 'https://placeimg.com/190/190/animals',
          name: 'The quick brown fox jumps over the lazy dog',
          originalPrice: 10000000,
          finalPrice: 6999000,
          available: false
        }, {
          id: 5,
          imgUrl: 'https://placeimg.com/190/190/animals',
          name: 'The quick brown fox jumps over the lazy dog',
          originalPrice: 100000000,
          finalPrice: 98999000,
          available: true
        }
      ]
    }
  },
  {
    url: '/example-api/product',
    method: 'POST',
    response: {
      'code': 200,
      'status': 'OK',
      'data': {
        'code': '1'
      }
    }
  },
  {
    url: '/example-api/product/1',
    method: 'PUT',
    response: {
      'code': 200,
      'status': 'OK',
      'data': {
        'code': '1'
      }
    }
  },
  {
    url: '/example-api/product/1',
    method: 'DELETE',
    response: {
      'code': 200,
      'status': 'OK',
      'data': {
        'code': '1'
      }
    }
  }
]
