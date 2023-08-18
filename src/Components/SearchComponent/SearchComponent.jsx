import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import App from "../../App.css";
const SearchComponent = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Perform search logic here
    // ...

    // Navigate to the results page with search criteria as query parameters
    navigate(`/candidates?name=${name}&location=${location}`);
  };

  const [locate, setLocate] = useState([]);

  useEffect(() => {
    fetch("https://rsapp.bringin.io/admin/location")
      .then((res) => res.json())
      .then((data) => {
        setLocate(data);
        console.log(data);
      });
  }, []);
  console.log(location);

  const [functionalarea, setFunctionalarea] = useState([]);

  useEffect(() => {
    fetch("https://rsapp.bringin.io/admin/functionalarea")
      .then((res) => res.json())
      .then((data) => {
        setFunctionalarea(data);
        console.log(data);
      });
  }, []);
  console.log(functionalarea);

  return (
    <div>
      <div className="lg:block md:block hidden">
        <div className="flex justify-center mt-[66px] ">
          <div>
            <div className="lg:w-[720px] h-[60px] rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
              <div className="flex items-center ">
                <div className="">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                    <img alt="" src="/images/logo/job.svg" />
                    </div>
                    <input
                      type="text"
                      value={name}
                      list="fdata"
                      onChange={(e) => setName(e.target.value)}
                      className="  font-light	placeholder:text-[16px]	 rounded-l-lg block  pl-[64px] pt-1   lg:w-[286px] h-[60px]  outline-none"
                      placeholder="Candidate Skills"
                      required
                    />
                   <datalist id="fdata">
                      {functionalarea.map((f, i) => (
                        <option key={i}>{f.functionalname}</option>
                      ))}
                    </datalist>
                  </div>
                </div>
                <div>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                      <img alt="" src="/images/logo/locetion.svg" />
                    </div>
                    <input
                      type="text"
                      value={location}
                      list="ldata"
                      onChange={(e) => setLocation(e.target.value)}
                      className="   font-light	placeholder:text-[16px] rounded-l-lg block  pl-[64px] pt-1   lg:w-[286px] h-[60px]  outline-none"
                      placeholder="Location"
                      required
                    />
                  
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleSearch}
                    className="w-[154px] rounded-r-lg h-[60px] bg-[#0077B5] text-[18px] font-semibold text-white"
                  >
                    Start Hiring
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="lg:w-[286px]">
         
          </div>
          <div className="lg:w-[286px]">
          <datalist id="ldata">
                      {locate.map((l, i) => (
                        <option key={i}>{l.name}</option>
                      ))}
                    </datalist>
          </div>


        </div>
      </div>

      <div className="lg:hodden md:hidden block">
        <div className="flex justify-center mt-[46px] ">
          <div>
            <div className=" items-center ">
              <div className="">
                <div className="relative w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded rounded-[20px]">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                  <img alt="" src="/images/logo/job.svg" />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    list="fdata"

                    className=" border in rounded-lg block mb-7 pl-[64px] pt-1.5   lg:w-[286px] h-[60px] input  font-light	placeholder:text-[16px] outline-none"
                    placeholder="Candidate Skills"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="relative w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded rounded-[20px]">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                    <img alt="" src="/images/logo/locetion.svg"  />
                  </div>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    list="ldata"
                    className="  font-light	placeholder:text-[16px] rounded-lg border mb-5 block  pl-[64px] pt-1.5  input lg:w-[286px] h-[59px] outline-none"
                    placeholder="Location"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleSearch}
                  className="w-[120px] rounded-lg h-[40px] bg-[#0077B5] text-[14px] font-semibold text-white"
                >
                  Start Hiring
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
