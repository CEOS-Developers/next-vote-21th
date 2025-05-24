type CustomInputProps = {
  type: 'text' | 'email' | 'password';
  placeholder: string;
};

const CustomInput = ({ type, placeholder }: CustomInputProps) => {
  return (
    <div>
      <input
        type={type}
        className="w-full h-fit py-4 px-4 border-2 border-monochrome-200 rounded-lg text-xl font-normal text-monochrome-black focus:outline-primary-300 placeholder:text-monochrome-300"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
