import express from 'express'
import cors from 'cors'
import { PORT } from './config/config.js'

import pingRouter from './routers/pingRouter.js'
import tareaRouter from './routers/tareaRouter.js'

const app = express()
app.use(cors())

app.use(express.json())

// routers
app.use('/api/v1', pingRouter)

// usuarios
app.use('/api/v1', tareaRouter)



// Server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})