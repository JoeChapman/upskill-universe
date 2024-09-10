import app, { filterNames } from './server'
import request from 'supertest'

describe('server', () => {
  test('filterNames', () => {
    expect(
      filterNames(['Tim', 'John', 'Lynn', 'Samantha', 'Bob'])
    ).toEqual(['John', 'Lynn', 'Samantha'])
  })

  test('/greet', async () => {
    const response = await request(app)
      .get('/greet')
      .set('Accept', 'application/json')

      expect(response.status).toEqual(400)
      console.log(response)
      expect(response.body).toEqual({
        message: 'Name query parameter is required.'
      })
  })

  test('/greet?name=peter', async () => {
    const response = await request(app)
      .get('/greet?name=peter')
      .set('Accept', 'application/json')

      expect(response.status).toEqual(200)
      expect(response.body).toEqual({"long_names": ["John", "Emily"], "message": "Hello, peter"})
  })
})