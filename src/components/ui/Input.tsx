interface InputProps {
  type: string;
  id: string;
  placeholder: string;
  required?: boolean;
}

const Input = ({ type, id, placeholder, required = false }: InputProps) => {
  return (
    <input
      type={type}
      id={id}
      className="shadow-sm bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
