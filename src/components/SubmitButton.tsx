const SubmitButton = ({
  isActive,
  children,
}: {
  isActive: boolean;
  children: React.ReactNode;
}) => {
  const style = isActive ? "bg-main" : "bg-gray1";
  return (
    <div className="p-4">
      <button
        className={`${style} font-headline-2 text-gray50 shadow-08 w-full rounded py-3.5 whitespace-nowrap`}
      >
        {children}
      </button>
    </div>
  );
};

export default SubmitButton;
