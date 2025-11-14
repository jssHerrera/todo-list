import React from "react";

type InputProps = {
  name: string;
  value?: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
};

const Input = ({
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  className = "",
}: InputProps) => {
  return (
    <div className="flex gap-1 items-center w-full">
      <input
        id={name}
        name={name}
        value={value as string}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className={`w-full focus:outline-none  border-b-2 border-gray-400 ${className}`}
      />
    </div>
  );
};

export default Input;
