import { Link, useLoaderData } from "react-router-dom";
import job from "../../assets/logo/job.svg";
import location from "../../assets/logo/locetion.svg";
import AppLogo from "../App/AppLogo";
import useTitle from "../../hooks/useTitle";
import SearchComponent from "../SearchComponent/SearchComponent";
const ExpertiseArea = () => {
  useTitle("Expertise Area - Bringin");

  const expertisearea = useLoaderData();
  console.log(expertisearea);
  const expertiseAreas = expertisearea.functionarea;
  // const first = everyca[0]

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="">
            <SearchComponent></SearchComponent>

          
            <div className="">
              <div>
                <div className="mt-[67px] ">
                  <div className="mb-[46px]  ">
                    <h1 className=" lg:text-[40px] text-[#023C5B] md:text-[40px] text-[30px] font-semibold  text-center">
                      Trending{" "}
                      {expertisearea?.categoryname ? expertisearea?.categoryname : ""}{" "}
                      Expertise Area in Bangladesh
                    </h1>
                  </div>
                  <div 
                  className="relative  lg:bg-[url(/src/bgimages/hotjobhome.png)] bg-auto	 bg-bottom bg-no-repeat"
                  >
                    <div>
                    <div className="flex justify-center">
                    <div className="lg:p-0 md:p-0 p-5 lg:pb-[200px]">
                      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-[58px] md:gap-[58px] gap-[50px]  ">
                        {expertiseAreas.map((ceta) => (
                          <div key={ceta.id}>
                            <Link to={`/candidate/${ceta._id}`}>
                              <div className="card lg:w-[250px] md:w-[200px] w-[160px]  h-[130px] bg-[#F6FCF6] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)]  rounded rounded-[15px] relative">
                                <div className=" py-5 px-5">
                                  <div className="lg:w-[170px] md:w-[200px] w-[160px]  h-[110px]">
                                    <h2 className="lg:text-[20px] text-[#373A3D] md:text-[20px] text-[14px] leading-[22px] ">
                                      {ceta.functionalname.split("/").join("/ ")}
                                    </h2>
                                    <p className="lg:text-[16px] text-[#7A7C7D] md:text-[16px] text-[14px]  absolute bottom-4">
                                      90+ candidatess
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                      <div></div>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <AppLogo></AppLogo>
      </div>
    </div>
  );
};

export default ExpertiseArea;
