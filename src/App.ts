require('dotenv').config()

import express from 'express'

const app = express()

const { API_PORT } = process.env

app.listen(process.env.API_PORT, () => {
  console.info(`Server running on ${API_PORT}`)
})
