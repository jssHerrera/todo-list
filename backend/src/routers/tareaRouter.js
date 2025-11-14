import { Router } from 'express'
import { getTareasController, 
  postTareaController
 } from '../controllers/tareaController.js'


const router = Router()

// http://localhost:3000/api/v1/usuarios
router
  .get('/tareas', getTareasController)
  .post('/tareas', postTareaController)

export default router
