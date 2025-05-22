import { InputFieldProps } from "@/types/input";

interface InputFieldWithFeedbackProps extends InputFieldProps {
  isValid?: boolean;
  message?: string;
}

const InputFieldWithFeedback = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  isValid,
  message,
}: InputFieldWithFeedbackProps) => {
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
      <span
        className={`font-caption-1 min-h-[25px] ${isValid ? "text-main" : "text-pink"}`}
      >
        {message || "  "}
      </span>
    </div>
  );
};

export default InputFieldWithFeedback;
