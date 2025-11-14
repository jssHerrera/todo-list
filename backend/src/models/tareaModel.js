import { pool } from '../config/conexion.js'

// Listar tareas
export const getTareasModels = async () => {
  const result = await pool.query('SELECT * FROM tareas');
  return result.rows;
}

// Crear tarea
export const postTareaModels = async ({descripcion, estado=false, usuarioregistra = 1}) => {
  const query = `
  INSERT INTO tareas (descripcion, estado, usuarioRegistra)
  VALUES ($1, $2, $3)
  RETURNING *;
  `;

  const values = [descripcion, estado, usuarioregistra];

  const result = await pool.query(query, values);
  console.log(result)
  return result.rows[0];
}

// Actualizar tarea
export const putTareaModels = async (id, campos) => {
  const keys = Object.keys(campos);
  const values = Object.values(campos);
  
  if (keys.length === 0) {
    throw new Error('No hay campos para actualizar'); // Mejor lanzar error
  }

  const setQuery = keys
    .map((key, index) => `${key} = $${index + 1}`)
    .join(", ");

  const query = `
    UPDATE tareas
    SET ${setQuery}, fechaactualiza = NOW()
    WHERE id = $${keys.length + 1}
    RETURNING *;
  `;

  const result = await pool.query(query, [...values, id]);
  
  // si no se encontró el registro
  if (result.rows.length === 0) {
    throw new Error('Tarea no encontrada');
  }
  
  return result.rows[0];
};

// Eliminar tarea
export const deleteTareaModels = async (id) => {
  const query = 'DELETE FROM tareas WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [parseInt(id)]); // 👈
  
  if (result.rows.length === 0) {
    throw new Error('Tarea no encontrada');
  }
  
  return result.rows[0];
}