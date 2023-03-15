import { start } from './App'
require('dotenv').config()

const API_PORT = process.env.API_PORT || 3003

start(+API_PORT)
