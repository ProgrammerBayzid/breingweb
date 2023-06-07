import { Menu, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import AppLogo from "../App/AppLogo";
import l from "../../assets/guidline/Line 12.svg";
import Vector from "../../assets/commonlogo/Vector.svg";
import c from "../../assets/commonlogo/go.svg";
import useTitle from "../../hooks/useTitle";
import fr from "../../assets/blog/Frame.svg";
import App from '../../App.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Blogpage = () => {
  useTitle("Blogs - Bringin");

  const [blogs, setBlogs] = useState([]);
  const [cetagory, setCetagory] = useState([]);
  const [recent, setRecent] = useState([]);
  const [bl, setbl] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    fetch("https://bringinserver-v1.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setIsLoding(true);
        setBlogs(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://bringinserver-v1.vercel.app/recent/post")
      .then((res) => res.json())
      .then((data) => {
        setRecent(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://bringinserver-v1.vercel.app/cetagorys")
      .then((res) => res.json())
      .then((data) => {
        setIsLoding(true);
        setCetagory(data);
      });
  }, []);

  const cetagori = cetagory;
  const cetagor = cetagory.slice(0, 5);

  const filterBlog = (blogData) => {
    const filter = blogs.filter((bl) => bl.categoryName == blogData);
    setbl(filter);
  };

  if (isLoding === false) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="App mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="my-1">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
          <div className="col-span-2 mx-auto ">
            <div>
              <div className="">
                <div className="mt-[30px] grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2  gap-[5px] items-center ">
                  {cetagori.map((ca) => {
                    return (
                      <button
                        key={ca._id}
                        className="App button text-[#4C4F51] hover:text-[#0077B5] px-[8px] bg-[#F9F9F9] cursor-pointer hover:border-[#0077B5] border   hover:bg-[#FFFFFF] rounded-md py-[8px]"
                      >
                        <p
                          className="text-[14px]  "
                          onClick={() => {
                            filterBlog(ca.categoryName);
                          }}
                        >
                          {ca.categoryName}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-[15px] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
              {bl.map((post) => {
                const { img, blogTitle, authorName, description, _id , published_date} = post;
                return (
                  <div
                    key={_id}
                    className="w-[388px] h-[274px] bg-base-100 mb-[225px]"
                  >
                    <div>
                      <img alt="" src={img} className="rounded-xl object-cover h-[274px] w-[388px] " />
                    </div>
                    <div className="">
                      <Link to={`/details/${_id}`}>
                        <h2 className="card-title">{blogTitle}</h2>
                      </Link>
                      <div className="flex gap-5 my-1 text-[12px] mt-3">
                        <p className="text-[#4D5052]  ">by {authorName}</p>
                        <img alt="" className="w-[3px]" src={l} />

                        <p className="text-[#4D5052]">{published_date.slice(0,8)}</p>
                        <img className="w-[3px]" alt="" src={l} />

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
            <div className="mt-[15px] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
              {blogs.map((post) => {
                const { img, blogTitle, authorName, description, _id, published_date } = post;
                return (
                  <div
                    key={_id}
                    className="lg:w-[388px] bg-base-100 "
                  >
                    <div>
                      <img alt="" src={img} className="rounded-xl object-cover h-[274px] w-[388px] " />
                    </div>
                    <div className="pt-[16px]">
                      <Link to={`/details/${_id}`}>
                        <h2 className="card-title">{blogTitle}</h2>
                      </Link>
                      <div className="flex gap-5 my-1 text-[12px] mt-3">
                        <p className="text-[#4D5052]">by {authorName}</p>
                        <img alt="" className="w-[3px]" src={l} />

                        <p className="text-[#4D5052]">{published_date.slice(0,8)}</p>
                        <img className="w-[3px]" alt="" src={l} />

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
                        <button className="bg-[#0077B5] w-[101px] h-[26px] text-white  mt-3">
                          <Link to={`/details/${_id}`}>
                            <div className="flex items-center " >
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

          <div className="mt-[30px] lg:ml-0 md:ml-[230px]">
            <div className="">
              <div className="mb-[30px]">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search......"
                  className="input w-[370px]  shadow-[0_8px_60px_rgb(0,0,0,0.1)] 	"
                />
              </div>
              <div className="w-[373px] pb-24  shadow-[0_8px_60px_rgb(0,0,0,0.1)]  bg-white p-5">
                <div className="border-b-[3px] w-[100px]  border-[#0077B5] ">
                  <p className="text-[17px] font-semibold pb-[10px] ">
                    Recent Post
                  </p>
                </div>

                {recent
                  .filter((re) => {
                    return search.toLocaleLowerCase() === ""
                      ? re
                      : re.blogTitle.toLocaleLowerCase().includes(search);
                  })
                  .map((re) => (
                    <div key={re._id} className="mt-10 flex gap-4">
                      <div className="">
                        <img
                          alt=""
                          src={re.img}
                          className="object-cover w-[120px] h-[75px] rounded"
                        />
                      </div>
                      <div className="w-50%">
                      <Link to={`/details/${re._id}`}>

                        <h1 className="text-[15px] font-semibold">
                          {re.blogTitle}
                        </h1>
                      </Link>

                        <div className="flex gap-[1px]">
                          <img src={c} alt="" />
                          <p className="text-[10px]">{re.published_date.slice(0,8)}</p>
                        </div>{" "}
                        <p className="text-[10px]">By Bringin Career Guide</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="my-[39px]">
              <div className="">
                <div className="w-[373px] h-[637px]  shadow-[0_8px_60px_rgb(0,0,0,0.1)]  bg-white p-5">
                  <div className="border-b-[3px] w-[125px]  border-[#0077B5] ">
                    <p className="text-[16px] font-semibold pb-[10px]">
                      Blog catagories
                    </p>
                  </div>

                  {cetagor.map((ca) => {
                    return (
                      <Link
                        key={ca._id}
                        to={`/catagory/blogs/${ca.categoryName}`}
                      >
                        <div className="mt-10 flex gap-4 justify-between mb-2">
                          <p className="text-[16px]">{ca.categoryName}</p>
                          <img
                            alt=""
                            src={Vector}
                            className="w-[14px] h-[14px]"
                          />
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
      <div className="flex justify-center mt-10">
        <AppLogo></AppLogo>
      </div>
    </div>
  );
};

export default Blogpage;
