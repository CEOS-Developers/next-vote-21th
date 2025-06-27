import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputFormProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
};

export default function InputForm<T extends FieldValues>({
  label,
  name,
  type = 'text',
  register,
  error,
}: InputFormProps<T>) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-caption-04 flex items-center gap-2">
        <label htmlFor={name} className="text-accent-brown">
          {label}
        </label>
        {error && <p className="text-[10px] text-red-500">{error.message}</p>}
      </div>
      <input id={name} {...register(name)} type={type} className="text-body-02 outline-none" autoComplete="off" />
      <hr className="bg-accent-brown h-[2px]" />
    </div>
  );
}
