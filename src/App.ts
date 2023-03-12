import express, { Application } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(cors())
app.use(express.json())

export const start = (PORT: number) => {
  app.listen(PORT, () => {
    console.info(`Server running in ${PORT} port`)
  })
}
