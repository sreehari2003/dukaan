export const Button = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <button
      className={`border-[1px] border-[#D9D9D9] px-[6px] py-1 rounded-md inline-flex justify-center items-center gap-2 font-normal text-sm ${className}`}
    >
      {children}
    </button>
  );
};
