import { Col } from "./components/Col";
import { Row } from "./components/Row";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
        <Topbar />
        <div className="bg-main">
          <section className="flex justify-between px-6 mt-8">
            <h4 className="text-xl font-medium">Overview</h4>
            <h4>Overview</h4>
          </section>
          <div className="px-6 mt-8 w-[200px] flex justify-between">
            <span className="text-blue-500 border-b-2 border-blue-500 hover:cursor-pointer">
              Razorpay
            </span>
            <span className="hover:cursor-pointer">Cashfree</span>
          </div>
          <hr />
          <section className="flex px-6 gap-6">
            <div className="mt-5 bg-white p-5  rounded-md w-full shadow-md">
              <div className=" flex items-center">
                <div className="text-[#4d4d4d] font-['Inter'] leading-6">
                  Online orders
                </div>
              </div>
              <div className=" text-[2rem] font-medium leading-[2.375rem]">
                231
              </div>
            </div>
            <div className="mt-5 bg-white shadow-md p-5  rounded-md w-full">
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
            <div className="py-4">
              <div className="flex justify-between">
                <input
                  type="text"
                  className="px-4 py-2 outline-none rounded-md  border-[#D9D9D9] border-2 "
                  placeholder="Search by order id"
                />
                <div className="flex gap-2">
                  <button className="border-2 border-[#D9D9D9] px-[6px] py-1 rounded-[4px]">
                    Sort
                  </button>
                  <button className="border-2 border-[#D9D9D9] px-4 py-1 rounded-[4px]">
                    Test
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap mt-3 rounded-md">
                <Col />
                {new Array(15).fill(0).map(() => (
                  <Row />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
