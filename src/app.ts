import express, { Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'
import cookieParser from 'cookie-parser'

const app = express()

//cross origin request handler
app.use(cors())

//parsers
app.use(express.json())
app.use(cors())
app.use(cookieParser())

// application routes
app.use('/api', router)

// added so that home page do not return route not found.
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// global error handler

app.use(notFound)
app.use(globalErrorHandler)

export default app
