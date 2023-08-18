import useTitle from "../../hooks/useTitle";

const Priching = () => {
  useTitle('Priching')

    return (
        <div className="my-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <div className="text-[#454545] px-5 font-semibold text-[22px]">
              We take pride in offering highly competitive prices within the market, taking into careful consideration the exceptional quality and value of our services.
              </div>
             <div className="my-10 px-5">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left ">
                  <thead className="text-md text-gray-700   ">
                    <tr>
                      <th scope="col" className="px-6 py-3 border-[2px] border-[#6A6A6A] text-[#454545]   lg:text-[23px] md:text-[23px]">
                        <p className="lg:ml-[100px]">

                        Package Deals{" "}
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3  border-[2px] border-[#6A6A6A] text-[#454545] text-center lg:text-[23px] md:text-[23px]">
                        Chats Per Day
                      </th>
                      <th scope="col" className="px-6 py-3  border-[2px] border-[#6A6A6A] text-[#454545] text-center lg:text-[23px] md:text-[23px]">
                        Monthly Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-[#6A6A6A] border-b border-[#6A6A6A]">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium border-[#6A6A6A] border-[2px] border-[#6A6A6A] text-[#454545]  lg:text-[23px] md:text-[23px]"
                      >
                          <p className="lg:ml-[100px]">

                          Freemium{" "}
                          </p>
                      </th>
                      <td className="px-6 py-4 text-[#454545] border-[#6A6A6A] border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">06</td>
                      <td className="px-6 py-4 text-[#454545] border-[#6A6A6A] border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">0.00 BDT</td>
                    </tr>
                    <tr className="bg-white border-b border-[#6A6A6A] dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4  border-[2px] border-[#6A6A6A] font-medium text-[#454545]  lg:text-[23px] md:text-[23px]"
                      >
                          <p className="lg:ml-[100px]">

                        Silver
                          </p>
                      </th>
                      <td className="px-6 py-4 text-[#454545]  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">20</td>
                      <td className="px-6 py-4 text-[#454545]  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">1499 BDT</td>
                    </tr>
                    <tr className=" border-b border-[#6A6A6A] bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-[#454545]  border-[2px] border-[#6A6A6A] lg:text-[23px] md:text-[23px]"
                      >
                          <p className="lg:ml-[100px]">

                        Gold{" "}
                          </p>
                      </th>
                      <td className="px-6 py-4 text-[#454545]  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">45</td>
                      <td className="px-6 py-4 text-[#454545]  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">2699 BDT </td>
                    </tr>
                    <tr className="border-b border-[#6A6A6A] bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-[#454545]  border-[2px] border-[#6A6A6A]  lg:text-[23px] md:text-[23px]"
                      >
                        <p className="lg:ml-[100px]">

                        Platinum{" "}
                        </p>
                      </th>
                      <td className="px-6 py-4 text-[#454545]  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">100</td>
                      <td className="px-6 py-4 text-[#454545]  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">4999 BDT </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    );
};

export default Priching;