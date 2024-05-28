interface TextareaProps {
  id: string;
  placeholder: string;
}

const Textarea = ({ id, placeholder }: TextareaProps) => {
  return (
    <textarea
      id={id}
      className="shadow-sm bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
