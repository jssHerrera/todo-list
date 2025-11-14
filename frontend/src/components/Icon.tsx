interface IconProps {
  name?: string;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={`${className}`}
      style={color ? { fill: color } : undefined}
    >
      <use href={`#${name}`} />
    </svg>
  );
};
