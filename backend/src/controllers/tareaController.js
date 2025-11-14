import { getTareasModels, postTareaModels } from "../models/tareaModel.js";
import { pool } from "../config/conexion.js";

export const getTareasController = async (req, res) => {
  try {
    const result = await getTareasModels()
    console.log(result)
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tareas" });
  }
}

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