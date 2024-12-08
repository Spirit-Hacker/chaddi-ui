import React from "react";

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: "Primary" | "Secondary" | "Danger";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "Primary",
}) => {
  const baseClasses = "px-4 py-2 rounded font-medium focus:outline-none";
  const variantClasses =
    variant === "Primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : variant == "Secondary"
      ? "bg-gray-200 text-black hover:bg-gray-300"
      : "bg-red-500 text-white hover:bg-red-600";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
