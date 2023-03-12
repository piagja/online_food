require('dotenv').config()
import { start } from './App'

const API_PORT = process.env.API_PORT || 3003

start(+API_PORT)
