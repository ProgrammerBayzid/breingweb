 import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fr from "../../../assets/blog/Frame.svg";
import d from "../../../assets/guidline/Line 12.svg"
import Spinner from '../../Spinner/Spinner';

const CarearAdvice = () => {
  
  const [blogs, setBlogs] = useState([]);

  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    fetch("https://bringinserver-v1.vercel.app/guidline/blogs/Career")
      .then((res) => res.json())
      .then((data) => {
        setIsLoding(true);
        setBlogs(data);
      });
  }, []);
  if (isLoding === false) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className=" bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-7  lg:h-[730px] mt-20 ">
        <div className=" ">
          <div>
            <h1 className="mx-auto text-[40px] font-medium mt-10 mb-20 text-center">
              Career Advice
            </h1>
          </div>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ml-5">
          {blogs.map((post) => {
                const { img, blogTitle, authorName, description, _id , published_date} = post;
                return (
                  <div
                    key={_id}
                    className=" w-[388px] h-[274px] bg-base-100 "
                  >
                    <div>
                      <img alt="" src={img} className="rounded-xl w-[388px] " />
                    </div>
                    <div className="my-[16]">
                      <Link to={`/details/${_id}`}>
                        <h2 className="card-title">{blogTitle}</h2>
                      </Link>
                      <div className="flex gap-5 my-3 text-[12px] ">
                        <p className="text-[#4D5052]">by {authorName}</p>
                        <img alt="" className="w-[3px]" src={d} />

                        <p className="text-[#4D5052]">{published_date.slice(0,8)}</p>
                        <img className="w-[3px]" alt="" src={d} />

                        <p className="text-[#4D5052]">No Comments</p>
                      </div>
                      <p className="text-[#4D5052] mt-3">
                        {description && description.length > 300 ? (
                          <>{description.slice(0, 150) + " " + "..."}</>
                        ) : (
                          <span>{description}</span>
                        )}
                      </p>
                      {/* dangerouslySetInnerHTML={{__html: post.details}} */}
                      <div className="card-actions justify-start">
                        <button className="bg-[#0077B5] w-[101px] h-[26px] text-white mt-3">
                          <Link to={`/details/${_id}`}>
                            <div className="flex items-center">
                              <p> Read More</p>
                              <img
                                alt=""
                                src={fr}
                                className="w-5 mb-[22px] pr-3"
                              />
                            </div>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarearAdvice;
