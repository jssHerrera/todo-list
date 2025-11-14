// services/tareasService.ts (o donde tengas tus servicios)

const API_URL = "http://localhost:3000/api/v1/tareas";

// Obtener todas las tareas
export const obtenerTareas = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al obtener tareas");
  return response.json();
};

// Crear una tarea
export const crearTarea = async (descripcion: string) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ descripcion }),
  });
  if (!response.ok) throw new Error("Error al crear tarea");
  return response.json();
};

// Actualizar tarea (completar/descompletar)
export const actualizarTarea = async (id: number, descripcion: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT", // o 'PATCH' según tu backend
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ descripcion }),
  });
  if (!response.ok) throw new Error("Error al actualizar tarea");
  return response.json();
};

// Eliminar tarea
export const eliminarTarea = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar tarea");
  return response.json();
};
