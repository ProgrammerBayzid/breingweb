import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const CarearAdvice = () => {
  const [blogs, setBlogs] = useState([]);

  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    fetch("https://bringinserver-v1.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setIsLoding(true);
        setBlogs(data);
      });
  }, []);

  const limit = blogs;

  if (isLoding === false) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="  ">
        <div className=" ">
          <div className="flex items-center justify-around lg:my-[80px] md:my-[60px] my-[40px]">
            <div className="">
              <p className="text-[#A6DEF3] hidden lg:block ">
                ______________________________________________
              </p>
            </div>
            <h1 className=" lg:text-[30px]  md:text-[35px] text-[25px] font-medium text-center text-[#00486D] mt-2">
              Read our articles.
            </h1>
            <div className=" ">
              <p className="text-[#A6DEF3] hidden lg:block ">
                ________________________________________________
              </p>
            </div>
          </div>

          <div className="flex  justify-center">
            <div>
              <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                {limit.map((post) => {
                  const {
                    img,
                    blogTitle,
                    authorName,
                    description,
                    _id,
                    published_date,
                  } = post;
                  return (
                    <Link key={_id} to={`/details/${_id}`}>
                      <div className=" lg:w-[373px] lg:h-[303px] w-[300px] h-[250px] bg-[#F6F6F6]  border-t-[1px] border-[#00A0DC]">
                        <div>
                          <div>
                            <LazyLoadImage
                              effect="blur"
                              loading="lazy"
                              src={img}
                            />
                          </div>

                          <div>
                            <p className="p-4 font-light	leading-7 text-[#177CC6] lg:text-[20px] text-[16px] ">
                              {blogTitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarearAdvice;
