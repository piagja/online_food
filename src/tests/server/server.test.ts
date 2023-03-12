require('dotenv').config()

import { app } from '../../App'

import * as http from 'http'
import supertest from 'supertest'

const { API_PORT } = process.env

let server: http.Server
let request: supertest.SuperTest<supertest.Test>

beforeAll(clear => {
  server = app.listen(API_PORT, () => {
    request = supertest(server)
    clear()
  })
})

afterAll(clear => {
  server.close(clear())
})

describe('Server Layer', () => {
  it('Should listening at dotenv API PORT', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
})
