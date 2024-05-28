import { ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'dark';
  children: ReactNode;
}

const Button = ({ type = 'button', variant = 'primary', children }: ButtonProps) => {
  let className = 'py-3 px-5 text-sm font-medium text-center text-[#ffffff] rounded-lg w-full sm:w-fit ';

  switch (variant) {
    case 'primary':
      className += 'text-white bg-primary';
      break;
    case 'secondary':
      className += 'text-dark bg-secondary';
      break;
    case 'dark':
      className += 'text-white bg-dark';
      break;
    default:
      className += 'text-white bg-primary';
  }

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
