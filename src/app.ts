import express from 'express'
import cors from 'cors'
import router from './app/routes'

const app = express()

//cross origin request handler
app.use(cors())

//parsers
app.use(express.json())
app.use(cors())

// application routes
app.use('/api', router)

export default app
