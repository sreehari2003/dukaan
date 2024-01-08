export const Col = () => {
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
        <div className="bg-gray-200 p-4 ">Order ID</div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 ">
        <div className="bg-gray-200 p-4 ">Order date</div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 ">
        <div className="bg-gray-200 p-4 ">Order amount</div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 ">
        <div className="bg-gray-200 p-4 text-end">Transaction fees</div>
      </div>
    </>
  );
};
