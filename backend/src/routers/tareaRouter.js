import { Router } from 'express'
import { 
  getTareasController, 
  postTareaController,
  putTareaController,
  deleteTareaController
 } from '../controllers/tareaController.js'


const router = Router()

// http://localhost:3000/api/v1/tareas
router
  .get('/tareas', getTareasController)
  .post('/tareas', postTareaController)
  .put('/tareas/:id', putTareaController)
  .delete('/tareas/:id', deleteTareaController)

export default router
