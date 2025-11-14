import { Icon } from "../Icon";
import Button from "../Button";

interface Tarea {
  id: number;
  descripcion: string;
  estado: boolean;
}

interface ListaTodoProps {
  tareas: Tarea[];
  tareaEditandoId?: number;
  handleEliminarTarea?: (id: number) => void;
  handleEditarTarea?: (tarea: Tarea) => void;
}

export const ListaTodo = ({
  tareas,
  tareaEditandoId,
  handleEliminarTarea,
  handleEditarTarea,
}: ListaTodoProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-xl w-full">
      {tareas.map((tarea) => (
        <div
          key={tarea.id}
          className={`flex items-center justify-between border-2 border-gray-400 px-4 py-2 rounded-xl ${
            tareaEditandoId === tarea.id ? "bg-yellow-100" : ""
          }`}
        >
          <span
            className={`text-gray-700 font-semibold ${
              tarea.estado ? "line-through opacity-50" : ""
            }`}
          >
            {tarea.descripcion}
          </span>

          <div className="flex gap-1">
            <Button handlerClick={() => handleEditarTarea?.(tarea)}>
              <Icon
                name="edit"
                size={20}
                className="text-gray-400 hover:text-gray-800"
              />
            </Button>
            <Button handlerClick={() => handleEliminarTarea?.(tarea.id)}>
              <Icon
                name="delete"
                size={20}
                className="text-gray-400 hover:text-red-600"
              />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
