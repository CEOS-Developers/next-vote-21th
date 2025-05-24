import { InputFieldProps } from "@/types/input";

const InputField = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-[7px] p-4">
      <label htmlFor={name} className="font-caption-1 text-gray600">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="font-headline-2 border-b-gray200 outline-0"
      />
    </div>
  );
};

export default InputField;
