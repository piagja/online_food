require('dotenv').config()
import { start } from './App'

const { API_PORT } = process.env

start(+API_PORT)
