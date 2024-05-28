import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "dark";
  size?: "small" | "medium" | "large";
  children: ReactNode;
}

const Button = ({
  type = "button",
  variant = "primary",
  size = "medium",
  children,
}: ButtonProps) => {
  let className = " font-medium text-center text-[#ffffff] w-full sm:w-fit ";

  switch (variant) {
    case "primary":
      className += "text-white bg-primary";
      break;
    case "secondary":
      className += "text-dark bg-secondary";
      break;
    case "dark":
      className += "text-white bg-dark";
      break;
    default:
      className += "text-white bg-primary";
  }

  switch (size) {
    case "small":
      className += " py-1 px-2 text-xs rounded-lg ";
      break;
    case "medium":
      className += " py-3 px-5 text-sm rounded-lg ";
      break;
    case "large":
      className += " text-[20px] rounded-[2px] px-[20px] py-2.5 ";
      break;
    default:
      className += " py-3 px-5 text-sm rounded-lg ";
  }

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
