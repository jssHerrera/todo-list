import express from 'express'
import cors from 'cors'
import { PORT } from './config/config.js'

const app = express()
app.use(cors())

app.use(express.json())

// routers
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})