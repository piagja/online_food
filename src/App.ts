import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'ok'
  })
})

export const start = (PORT: number) => {
  app.listen(PORT, () => {
    console.info(`Server running in ${PORT} port`)
  })
}

export { app }
