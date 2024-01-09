import { CiSearch } from "react-icons/ci";
import { FaSortDown } from "react-icons/fa6";

export const Topbar = () => {
  return (
    <div className="flex justify-between p-5 border-b-2 items-center">
      <div className="flex justify-between w-[200px]">
        <h6>Payments</h6>
        <span className="font-light text-[#4D4D4D] text-sm self-center flex">
          <img src="Help.svg" alt="qn icon" className="mr-2" />
          How it works
        </span>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600">
          <CiSearch />
        </div>
        <input
          type="text"
          className="px-4 py-2 outline-none rounded-md  w-[400px]  pl-10 bg-input"
          placeholder="Search features, tutorials, etc."
        />
      </div>

      <div className="flex justify-between w-[90px] items-center">
        <span className="rounded-full p-3 bg-input flex justify-normal items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z"
              fill="#4D4D4D"
            />
          </svg>
        </span>
        <span className="rounded-full p-3 bg-input flex justify-normal items-center">
          <FaSortDown size={17} />
        </span>
      </div>
    </div>
  );
};
