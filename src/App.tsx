import { Col } from "./components/Col";
import { Row } from "./components/Row";
import { Sidebar } from "./components/Sidebar";
import { GoDownload } from "react-icons/go";
import { Topbar } from "./components/Topbar";
import { Button } from "./components/Button";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
        <Topbar />
        <div className="bg-main">
          <section className="flex justify-between px-6 mt-8">
            <h4 className="text-xl font-medium">Overview</h4>
            <select
              name="select"
              id=""
              className="w-30 border-[1px] border-input py-2 text-sm font-normal px-3 rounded-sm"
            >
              <option value="a">Last Month</option>
            </select>
          </section>
          <section className="flex px-6 gap-6">
            <div className="mt-5 bg-white p-5  rounded-md w-full shadow-sm">
              <div className=" flex items-center">
                <div className="text-[#4d4d4d] font-['Inter'] leading-6">
                  Online orders
                </div>
              </div>
              <div className=" text-[2rem] font-medium leading-[2.375rem]">
                231
              </div>
            </div>
            <div className="mt-5 bg-white shadow-sm p-5  rounded-md w-full">
              <div className=" flex items-center">
                <div className="text-[#4d4d4d]  leading-6">Amount received</div>
              </div>
              <div className="font-['Inter'] text-[2rem] font-medium leading-[2.375rem]">
                ₹23,92,312.19
              </div>
            </div>
          </section>
          <section className="px-6 mt-8">
            <h4 className="text-xl font-medium leading-7">
              Transaction | This month
            </h4>
            <div className="py-4 bg-white mt-2">
              <div className="flex justify-between">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600">
                    <CiSearch />
                  </div>
                  <input
                    type="text"
                    className="px-4 py-2 outline-none rounded-md border-[#D9D9D9] border-[1px] pl-10"
                    placeholder="Search by order id"
                  />
                </div>
                <div className="flex gap-2">
                  <button className="border-[1px] border-[#D9D9D9] px-[6px] py-1 rounded-md inline-flex justify-center items-center gap-2 font-normal text-sm">
                    Sort
                    <GoDownload />
                  </button>
                  <button className="border-[1px] border-[#D9D9D9] px-2 py-1 rounded-[4px]">
                    <GoDownload />
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap mt-3 rounded-md">
                <Col />
                {new Array(15).fill(0).map(() => (
                  <Row />
                ))}
                <div className="flex justify-center items-center  w-full">
                  <div className="flex w-[600px] mt-2  justify-between">
                    <Button className="flex">
                      <GrFormPrevious />
                      Previous
                    </Button>
                    <div className="flex justify-between w-[200px] gap-1">
                      {new Array(10).fill(0).map((_, index) => (
                        <button className="text-black/60 text-2">
                          {index + 3}
                        </button>
                      ))}
                    </div>
                    <Button className="flex">
                      Next <MdNavigateNext />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
