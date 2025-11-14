import { getTareasModels, postTareaModels, putTareaModels, deleteTareaModels } from "../models/tareaModel.js";
import { pool } from "../config/conexion.js";

// Listar tareas
export const getTareasController = async (req, res) => {
  try {
    const result = await getTareasModels()
    console.log(result)
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tareas" });
  }
}

// Crear tarea
export const postTareaController = async (req, res) => {
  try {
   const nuevaTarea = await postTareaModels(req.body);
   

    await pool.query(
      `
      INSERT INTO logs (descripcion, usuarioregistra)
      VALUES ($1, $2)
      `,
      [`Tarea creada con ID ${nuevaTarea.id}`, nuevaTarea.usuarioregistra]
    );

   res.status(201).json({
      message: "Tarea creada correctamente",
      data: nuevaTarea
    });

  } catch (error) {
    res.status(500).json({ message: "Error al crear tarea" });
  }
}

// Controller
export const putTareaController = async (req, res) => {
  try {
    const { id } = req.params; // 👈 ID desde la URL
    const campos = req.body;   // 👈 Datos a actualizar desde el body
    
    const tareaActualizada = await putTareaModels(id, campos);

    await pool.query(
      `INSERT INTO logs (descripcion, usuarioregistra)
       VALUES ($1, $2)`,
      [`Tarea actualizada con ID ${tareaActualizada.id}`, tareaActualizada.usuarioregistra]
    );
    
    res.status(200).json({ // 👈 200 para UPDATE (no 201)
      message: "Tarea actualizada correctamente",
      data: tareaActualizada
    });

  } catch (error) {
    
      // Si es el error "Tarea no encontrada" del modelo
    if (error.message === 'Tarea no encontrada') {
      return res.status(404).json({ 
        message: 'Tarea no encontrada',
        error: `No existe una tarea con el ID ${req.params.id}` 
      });
    }

    res.status(500).json({ 
      message: "Error al actualizar tarea",
      error: error.message 
    });
  }
}

// Controller - Extrae el id antes de pasarlo
export const deleteTareaController = async (req, res) => {
  try {
    const { id } = req.params;
    const tareaEliminada = await deleteTareaModels(id);
    
    await pool.query(
      `INSERT INTO logs (descripcion, usuarioregistra)
       VALUES ($1, $2)`,
      [`Tarea eliminada con ID ${tareaEliminada.id}`, tareaEliminada.usuarioregistra]
    );

    res.json({ 
      message: 'Tarea eliminada correctamente',
      data: tareaEliminada 
    });
    
  } catch (error) {

    
    // Si es el error "Tarea no encontrada" del modelo
    if (error.message === 'Tarea no encontrada') {
      return res.status(404).json({ 
        message: 'Tarea no encontrada',
        error: `No existe una tarea con el ID ${req.params.id}` 
      });
    }
    
    // Otros errores (DB, etc)
    res.status(500).json({ 
      message: "Error al eliminar tarea",
      error: error.message 
    });
  }
}