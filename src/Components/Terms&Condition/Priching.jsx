import useTitle from "../../hooks/useTitle";

const Priching = () => {
  useTitle('Pricing')

    return (
        <div className="my-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <div className="text-[#212427] text-opacity-90 px-5 font-semibold text-[22px]">
              We take pride in offering highly competitive prices within the market, taking into careful consideration the exceptional quality and value of our services.
              </div>
             <div className="my-10 px-5">
              <div className="relative overflow-x-auto">
                <table className="w-full text-left ">
                  <thead className="   text-[#212427] text-opacity-90  font-medium">
                    <tr>
                      <th scope="col" className="px-1 ps-2 py-3 border-[2px] border-[#6A6A6A]    lg:text-[23px] md:text-[23px]">
                        <p className="lg:ml-[50px]  ">

                        Package Deals{" "}
                        </p>
                      </th>
                      <th scope="col" className="px-2 py-3  border-[2px] border-[#6A6A6A] text-[#454545] text-center lg:text-[23px] md:text-[23px]">
                        Chats Per Day
                      </th>
                      <th scope="col" className="px-10 py-3  border-[2px] border-[#6A6A6A] text-[#454545] text-center lg:text-[23px] md:text-[23px]">
                      Validity
                      </th>
                      <th scope="col" className="px-2 py-3  border-[2px] border-[#6A6A6A] text-[#454545] text-center lg:text-[23px] md:text-[23px]">
                       Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-[#6A6A6A] border-b border-[#6A6A6A]">
                      <th
                        scope="row"
                        className="px-6 ps-10 py-4 font-normal border-[#6A6A6A] border-[2px] border-[#6A6A6A] text-[#212427] text-opacity-90  lg:text-[23px] md:text-[23px]"
                      >
                          <p className="lg:ml-[20px]">

                          Freemium{" "}
                          </p>
                      </th>
                      <td className="px-6 py-4 text-[#212427] text-opacity-90 border-[#6A6A6A] border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">06</td>
                      <td className="px-6 py-4 text-[#212427] text-opacity-90 border-[#6A6A6A] border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">Forever</td>
                      <td className="px-6 py-4 text-[#212427] text-opacity-90 border-[#6A6A6A] border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">0.00 BDT</td>
                    </tr>
                    <tr className="bg-white border-b border-[#6A6A6A] dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 ps-10 py-4  border-[2px] border-[#6A6A6A] font-normal text-[#212427] text-opacity-90  lg:text-[23px] md:text-[23px]"
                      >
                          <p className="lg:ml-[20px]">

                          Startups Choice
                          </p>
                      </th>
                      <td className="px-6 py-4 text-[#212427] text-opacity-90  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">30</td>
                      <td className="px-6 py-4 text-[#212427] text-opacity-90  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">7 Days</td>
                      <td className="px-6 py-4 text-[#212427] text-opacity-90  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">550 BDT</td>
                    </tr>
                    <tr className=" border-b border-[#6A6A6A] bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 ps-10 py-4 font-normal text-[#212427] text-opacity-90  border-[2px] border-[#6A6A6A] lg:text-[23px] md:text-[23px]"
                      >
                          <p className="lg:ml-[20px]">

                          Recommended{" "}
                          </p>
                      </th>
                      <td className="px-6 py-4 text-[#212427] text-opacity-90  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">50</td>
                      <td className="px-6 py-4 text-[#212427] text-opacity-90  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">15 Days</td>
                      <td className="px-6 py-4 text-[#212427] text-opacity-90  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">1500 BDT </td>
                    </tr>
                    <tr className="border-b border-[#6A6A6A] bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 ps-10 py-4 font-normal text-[#212427] text-opacity-90  border-[2px] border-[#6A6A6A]  lg:text-[23px] md:text-[23px]"
                      >
                        <p className="lg:ml-[20px]">

                        Best Deal{" "}
                        </p>
                      </th>
                      <td className="px-6 py-4 text-[#212427] text-opacity-90  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">100</td>
                      <td className="px-6 py-4 text-[#212427] text-opacity-90  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">30 Days</td>
                      <td className="px-6 py-4 text-[#212427] text-opacity-90  border-[2px] border-[#6A6A6A] text-center lg:text-[23px] md:text-[23px]">4500 BDT </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    );
};

export default Priching;