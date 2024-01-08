export const Topbar = () => {
  return (
    <div className="flex justify-between w-[1250px] p-5 border-b-2 items-center">
      <div className="flex justify-between w-[200px]">
        <h6>Payments</h6>
        <span className="font-thin text-sm">How it works</span>
      </div>
      <input
        type="text"
        className="px-4 py-2 outline-none rounded-md w-[400px] bg-input"
        placeholder="Search features and tutorials"
      />
      <div className="flex justify-between w-[200px]">
        <h6>Payments</h6>
        <span>How it works</span>
      </div>
    </div>
  );
};
