interface ButtonProps {
  size?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  handlerClick?: () => void;
}

const baseStyles =
  "w-9 h-8 text-white flex items-center justify-center rounded-lg cursor-pointer transition-all duration-300 overflow-hidden";

const Button = ({
  size,
  children,
  className,
  type,
  handlerClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      className={`${baseStyles} ${size} ${className}`}
      onClick={handlerClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
