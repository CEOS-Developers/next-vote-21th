const SubmitButton = ({
  isActive,
  children,
}: {
  isActive: boolean;
  children: React.ReactNode;
}) => {
  const style = isActive ? "bg-main cursor-pointer" : "bg-gray1";
  return (
    <div className="mx-4 my-6">
      <button
        className={`${style} font-headline-2 text-gray50 shadow-08 w-full rounded py-3.5 whitespace-nowrap`}
      >
        {children}
      </button>
    </div>
  );
};

export default SubmitButton;
