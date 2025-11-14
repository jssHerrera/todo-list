import { Icon } from "./Icon";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const Checkbox = ({ checked, onChange, className }: CheckboxProps) => {
  return (
    <label
      className={`flex items-center gap-2 cursor-pointer select-none ${className}`}
    >
      {/* Checkbox oculto */}
      <input
        type="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />

      {/* Checkbox visible (personalizado) */}
      <div
        className={`
          w-5 h-5 rounded-md border-2 border-gray-400
          flex items-center justify-center
          transition-all duration-300
          peer-checked:bg-blue-600
          peer-checked:border-blue-600
        `}
      >
        {/* Check - usa directamente el estado 'checked' en lugar de peer-checked */}
        <Icon
          name="check"
          size={20}
          className={`text-white transition-opacity ${
            checked ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </label>
  );
};

export default Checkbox;
