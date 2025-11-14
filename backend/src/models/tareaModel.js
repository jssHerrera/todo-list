import { pool } from '../config/conexion.js'

export const getTareasModels = async () => {
  const result = await pool.query('SELECT * FROM tareas');
  return result.rows;
}

export const postTareaModels = async ({descripcion, estado, usuarioregistra}) => {

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

export const putTareaModels = async () => {
  const result = await pool.query('SELECT * FROM tareas');
  return result.rows;
}

export const deleteTareaModels = async () => {
  const result = await pool.query('SELECT * FROM usuarios');
  return result.rows;
}