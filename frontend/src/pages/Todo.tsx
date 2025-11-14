import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Icon } from "../components/Icon";
import Input from "../components/Input";
import Button from "../components/Button";
import { ListaTodo } from "../components/organismo/ListaTodo";
import {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
} from "../services/TodoService";

interface Tarea {
  id: number;
  descripcion: string;
  estado: boolean;
}

export const Todo = () => {
  const [todo, setTodo] = useState("");
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [tareaEditando, setTareaEditando] = useState<number>(0);

  // Cargar tareas
  const cargarTareas = async () => {
    try {
      const data = await obtenerTareas();
      setTareas(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Agregar o actualizar tarea
  const guardarTarea = async () => {
    if (!todo.trim()) {
      toast.warning("La tarea no puede estar vacía");
      return;
    }

    try {
      if (tareaEditando !== 0) {
        // Modo edición: actualizar
        await actualizarTarea(tareaEditando, todo);
        setTareaEditando(0);
      } else {
        // Modo crear: agregar nueva
        await crearTarea(todo);
      }
      setTodo("");
      cargarTareas();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEditarTarea = (tarea: Tarea) => {
    setTodo(tarea.descripcion);
    setTareaEditando(tarea.id);
  };

  // Cancelar edición
  const cancelarEdicion = () => {
    setTodo("");
    setTareaEditando(0);
  };
  // Eliminar tarea
  const handleEliminarTarea = async (id: number) => {
    try {
      await eliminarTarea(id);
      cargarTareas();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await cargarTareas();
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center mt-10 px-5 py-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl text-gray-700 mb-4">Your Todo</h1>
        <div className="flex items-end gap-8 mb-4">
          <Input
            name="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a todo"
            type="text"
          />
          {tareaEditando ? (
            <div className="flex gap-2">
              <Button
                className="bg-green-500 hover:bg-green-600"
                handlerClick={guardarTarea}
              >
                <Icon name="edit" size={20} className="text-white" />
              </Button>
              <Button
                className="bg-red-500 hover:bg-red-600"
                handlerClick={cancelarEdicion}
              >
                x
              </Button>
            </div>
          ) : (
            <Button
              className="bg-gray-500 hover:bg-gray-600"
              handlerClick={guardarTarea}
            >
              <Icon name="add" size={20} className="text-white" />
            </Button>
          )}
        </div>
        <ListaTodo
          tareas={tareas}
          handleEliminarTarea={handleEliminarTarea}
          handleEditarTarea={handleEditarTarea}
          tareaEditandoId={tareaEditando}
        />
      </div>
    </main>
  );
};
