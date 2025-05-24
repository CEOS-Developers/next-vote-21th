import clsx from 'clsx';

type CustomInputProps = {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  isVerifyContained?: boolean;
};

const CustomInput = ({
  type,
  placeholder,
  isVerifyContained = false,
}: CustomInputProps) => {
  return (
    <div>
      <input
        type={type}
        className={clsx(
          'w-full h-fit py-4 px-4 border-2 border-monochrome-200 rounded-lg text-xl font-normal text-monochrome-black focus:outline-primary-300 placeholder:text-monochrome-300',
          isVerifyContained && 'pr-25'
        )}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
