export const Row = () => {
  return (
    <div className="flex border-b-2 w-full">
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
        <div className=" p-4 text-[#146EB4]">#281209 </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 ">
        <div className=" p-4 font-light">7 July, 2023</div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 ">
        <div className="p-4 font-light">₹1,278.23</div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 ">
        <div className=" p-4 text-end font-light">₹22</div>
      </div>
    </div>
  );
};
