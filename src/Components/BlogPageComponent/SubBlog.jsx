import { Link, useLoaderData } from "react-router-dom";
import AppLogo from "../App/AppLogo";
import l from "../../assets/guidline/Line 12.svg";
import Vector from "../../assets/commonlogo/Vector.svg";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import useTitle from "../../hooks/useTitle";
import fr from "../../assets/blog/Frame.svg";
import c from "../../assets/commonlogo/go.svg";
import Group from "../../assets/blog/Group.svg";

const DegitalMarketing = () => {
  useTitle("Blogs - Bringin");

  const subBlog = useLoaderData();
  const [cetagory, setCetagory] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [search, setSearch] = useState("");

  const first = subBlog[0];

  const [recent, setRecent] = useState([]);
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
  const cetagor = cetagory.slice(0, 5);
  if (isLoding === false) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
      <div className="">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
          <div className="col-span-2 my-20">
            <div className="flex gap-1 items-center mb-4">
              <div>
                <img alt="" src={Group} />
              </div>
              <div>
                <h1 className="text-[12px] text-[#8C8C8C]">
                  Home / { first?.categoryName?  first.categoryName : ''}
                </h1>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
              {subBlog.length > 0 &&
                subBlog.map((sb) => {
                  const { img, blogTitle, authorName, description, _id, published_date } = sb;

                  return (
                    <div
                      key={_id}
                      className="card card-compact w-96 bg-base-100 "
                    >
                      <div>
                        <img
                          src={img}
                          alt=""
                          className="rounded-xl object-cover h-[274px] w-[388px]"
                        />
                      </div>
                      <div className="card-body">
                        <h2 className="card-title">{blogTitle} </h2>
                        <div className="flex gap-5 my-1">
                          <p>by {authorName}</p>
                          <img className="w-[3px]" alt="" src={l} />{" "}
                          <p>{published_date.slice(0,8)}</p>
                          <img className="w-[3px]" alt="" src={l} />{" "}
                          <p>No Comments</p>
                        </div>
                        <p>
                          {description && description.length > 300 ? (
                            <>{description.slice(0, 150) + " " + "..."}</>
                          ) : (
                            <span>{description}</span>
                          )}
                        </p>
                        <div className="card-actions justify-start">
                          <button className="bg-[#0077B5] w-[101px] h-[26px] text-white">
                            <div className="flex items-center">
                              <p> Read More</p>
                              <img
                                alt=""
                                src={fr}
                                className="w-5 mt-[2px] pr-3"
                              />{" "}
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div>
            <div className="my-20 ml-2">
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
                            <img src={c} alt=""></img>
                            <p className="text-[10px]">{re.published_date}</p>
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
      </div>
      <div className="flex justify-center mt-10">
        <AppLogo></AppLogo>
      </div>
    </div>
  );
};

export default DegitalMarketing;
