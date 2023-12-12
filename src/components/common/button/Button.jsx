export const Button = ({ children }) => {
  return (
    <div className="font-space-bold text-[15px]">
      <button className="py-[14px] px-[47px] bg-yellow text-white border-yellow border-[3px] transition duration-300 ease-in-out">
        {children}
      </button>
    </div>
  );
};
