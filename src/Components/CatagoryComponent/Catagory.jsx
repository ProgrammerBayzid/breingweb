import { Link, useLoaderData } from "react-router-dom";
import AppLogo from "../App/AppLogo";
import { useEffect, useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Catagory = () => {
  const { industryname } = useParams();
  useEffect(() => {
    
    const script = document.createElement("script");

     
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1556748687572177";
    script.async = true;
    script.crossOrigin = "anonymous";

     document.head.appendChild(script);

     return () => {
      document.head.removeChild(script);
    };
  }, []);
  const cetagory = useLoaderData();
  console.log(cetagory);
  const everyca = cetagory.category;
  // const first = everyca[0]

  const [cities, setcities] = useState([]);

  useEffect(() => {
    fetch("https://bringinserver-v1.vercel.app/cities")
      .then((res) => res.json())
      .then((data) => {
        setcities(data);
      });
  }, []);

  const [currentPage, SetCurrentPage] = useState(1);
  const recruterPerPage = 12;
  const lastIndex = currentPage * recruterPerPage;
  const firstIndex = lastIndex - recruterPerPage;
  const cata = everyca.slice(firstIndex, lastIndex);
  const npage = Math.ceil(everyca.length / recruterPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title> {industryname} Categories | Unbolt Chat Based Hiring App </title>
                <meta name="description" content=" At Unbolt-instant hiring app, Both Job Seekers and Recruiters can chat directly, also can attend instant in-app video call interviews and get hired instantly." />
                <link rel="canonical" href="http://unbolt.co/categories" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-KKFH10XGFV"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KKFH10XGFV');
          `}
        </script>
            </Helmet>
      <div>
        <div>
          <div className="">
            <SearchComponent></SearchComponent>

            <div>
              <div>
                <div className="mt-[67px] ">
                  <div className="mb-[46px]  ">
                    <h1 className=" lg:text-[40px] text-[#023C5B] md:text-[40px] text-[30px] font-semibold  text-center">
                      Trending{" "}
                      {industryname}{" "}
                      Categories in Bangladesh
                    </h1>
                  </div>
                  <div className="relative  lg:bg-[url(/src/bgimages/hotjobhome.png)] bg-auto	 bg-bottom bg-no-repeat">
                    <div>
                      <div className=" flex justify-center">
                        <div className="lg:p-0 md:p-0 p-5 lg:pb-[200px]">
                          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-[58px] md:gap-[58px]  gap-[50px]">
                            {cata.map((ceta) => (
                              <div key={ceta._id}>
                                <Link to={`/expertise-areas/${ceta.categoryname}`}>
                                  <div className="card lg:w-[250px] md:w-[200px] w-[160px]  h-[130px] bg-[#F6FCF6] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)]  relative rounded rounded-[15px]">
                                    <div className=" py-5 px-5">
                                      <div className="lg:w-[170px] md:w-[200px] w-[160px]  h-[110px]">
                                        <h2 className="lg:text-[18px] text-[#373A3D] md:text-[20px] text-[14px] leading-[22px] ">
                                          {ceta.categoryname
                                            .split("/")
                                            .join("/ ")}
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
                          <div className=" flex justify-between px-10 mt-20 ">
                            <div>
                              <p className="text-[18px] text-[#212427] bg-[#F6FCF6] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)]  relative rounded rounded-[5px] h-[30px] px-5 flex items-center">
                                {firstIndex + 1} - {lastIndex} {"  "}of{"  "}
                                {everyca.length}
                              </p>
                            </div>
                            <div>
                              <div className="flex gap-2">
                                {numbers.map((n, i) => (
                                  <p key={i} className="text-[18px] text-[#212427] bg-[#F6FCF6] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)]  relative rounded rounded-[5px] h-[30px] px-5 flex items-center hover:text-blue-500 cursor-pointer"  onClick={() => changePage(n)}>
                                    <a
                                      href="#"
                                     
                                      className={
                                        currentPage === n ? "text-blue-500" : ""
                                      }
                                    >
                                      {n}
                                    </a>
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <div className="mt-[67px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-20">
                  <div className="mb-[46px]  ">
                    <h1 className="mx-auto lg:text-[40px] md:text-[40px] text-[30px] font-semibold  text-center text-[#023C5B]">
                      Top Cities for{" "}
                      {cetagory?.industryname ? cetagory?.industryname : ""} in
                      Bangladesh
                    </h1>
                  </div>
                  <div className=" lg:p-0 md:p-0 p-5">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-[58px] md:gap-[58px] gap-5  justify-center">
                      {cities.length > 0 &&
                        cities.map((b) => (
                          <div key={b._id}>
                            <Link to={`/candidate/${b._id}`}>
                              <div className="card lg:w-[250px] md:w-[200px] w-[160px] relative h-[130px] bg-[#F6FCF6] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)] relative rounded rounded-[15px]">
                                <div className="py-5 px-5">
                                  <h2 className="lg:text-[20px] text-[#373A3D] md:text-[20px] text-[14px] leading-[22px]">
                                    {b.citiesName}
                                  </h2>
                                  <p className="lg:text-[16px] text-[#7A7C7D] md:text-[16px] text-[14px] absolute bottom-4">
                                    80+ candidatess
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
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

  function pevPage() {
    if (currentPage !== 1) {
      SetCurrentPage(currentPage - 1);
    }
  }

  function changePage(newPage) {
    SetCurrentPage(newPage);
  }

  function nextPage() {
    if (currentPage !== npage) {
      SetCurrentPage(currentPage + 1);
    }
  }
};

export default Catagory;
