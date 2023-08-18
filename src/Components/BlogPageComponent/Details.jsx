import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AppLogo from "../App/AppLogo";
import l from "../../assets/guidline/Line 12.svg";
import Spinner from "../Spinner/Spinner";
import Vector from "../../assets/commonlogo/Vector.svg";
import facebook from "../../assets/blogdetails/facebook.svg";
import twitter from "../../assets/blogdetails/twitter.svg";
import Ellipse from "../../assets/blogdetails/Ellipse 7.svg";
import i1 from "../../assets/about/Group 11884.svg";
import { useForm } from "react-hook-form";
import useTitle from "../../hooks/useTitle";
import Group from "../../assets/blog/Group.svg";
import c from "../../assets/commonlogo/go.svg";

const Details = () => {
  useTitle("Blogs Details- Bringin");

  const service = useLoaderData();
  const { authorName, blogTitle, published_date, description, details, img } =
    service;
  console.log(service);
  const [cetagory, setCetagory] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [recent, setRecent] = useState([]);
  const [search, setSearch] = useState("");

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

  useEffect(() => {
    fetch(`https://bringinserver-v1.vercel.app/comment?blogId=${service._id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, [refresh]);

  const cetagor = cetagory.slice(0, 3);
  const cetagori = cetagory.slice(0, 5);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data, e) => {
    console.log(data);
    const blog = {
      name: data.name,
      email: data.email,
      comment: data.comment,
      blogId: service._id,
      published_date: new Date().toLocaleString(),
    };

    // save blog information to the database
    fetch("https://bringinserver-v1.vercel.app/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((result) => {
        setRefresh(!refresh);
        e.target.reset();
        console.log(result);
      });
  };

  if (isLoding === false) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="lg:mx-[40px] md:mx-[10px] mx-[10px]">
      <div className="my-1">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
          <div className="col-span-2 my-[35px] ">
            <div className="lg:w-[800px] ">
              <div className="">
                <div className="lg:w-[800px] lg:h-[260px] bg-[#0077B5] flex justify-center items-center">
                  <div>
                    <div className="lg:flex lg:flex-row-reverse lg:justify-between md:flex md:flex-row-reverse md:justify-between lg:gap-x-5 lg:px-[50px]">
                      <img className="lg:w-[300px] lg:h-[175px]" src={img} />

                      <div className="px-3 py-2">
                        <div className="flex gap-1 mt-2 items-center">
                          <p className="text-white text-[12px]">
                            by {authorName}
                          </p>
                          <img
                            className="w-[2px] h-[11px]"
                            alt="bringin image"
                            src="/images/blog/bdmi.png"
                          />{" "}
                          <p className="text-white text-[12px]">
                            {published_date.slice(0, 8)}
                          </p>
                          <img
                            className="w-[2px] h-[11px]"
                            alt="bringin image"
                            src="/images/blog/bdmi.png"
                          />{" "}
                          <p className="text-white text-[12px]">No Comments</p>
                        </div>
                        <p className="text-[22px] text-white mt-4">
                          {" "}
                          {blogTitle}
                        </p>
                        <div className="bg-white w-[200px] h-[2px] mt-4" />
                        <p className="text-white text-[16px] font-medium mt-4">
                          Interviews Tips
                        </p>
                        <div className="mt-4">
                          <div className="flex gap-x-3 ">
                            <div className="mr-1">
                              <a href="" target="_blank">
                                {" "}
                                <img
                                  className="w-[18px] h-[18px]"
                                  alt="bringin image"
                                  src="/images/blog/bi1.png"
                                />
                              </a>
                            </div>
                            <div className="pr-1">
                              <a href="" target="_blank">
                                {" "}
                                <img
                                  className="w-[18px] h-[18px]"
                                  alt=""
                                  src="/images/blog/bt1.png"
                                />
                              </a>
                            </div>
                            <div>
                              <a href="" target="_blank">
                                {" "}
                                <img
                                  className="w-[18px] h-[18px]"
                                  alt="bringin image"
                                  src="/images/blog/bf1.png"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[50px] pr-5 lg:w-[800px] md:w-[626px] w-[350px]">
                  <p className="mb-4 text-[#4D5052]">{description}</p>

                  <div dangerouslySetInnerHTML={{ __html: details }} />
                </div>
              </div>
              <div className="lg:ml-0 md:ml-[140px] ml-0 lg:w-[816px] md:w-[626px] w-[350px]">
                <div className="lg:w-[800px] md:w-[540px] w-full h-[52px] border-2 border-[#0077B5] rounded mt-36  flex items-center">
                  <div className="flex lg:gap-20 md:gap-12 gap-5  lg:ml-5 items-center">
                    <div>
                      <p className="text-[16px] font-medium">Share This Post</p>
                    </div>
                    <div className="flex gap-x-3 ">
                      <div className="mr-1">
                        <a href="" target="_blank">
                          {" "}
                          <img
                            className="w-[18px] h-[18px]"
                            alt="bringin image"
                            src="/images/blog/bi.png"
                          />
                        </a>
                      </div>
                      <div className="pr-1">
                        <a href="" target="_blank">
                          {" "}
                          <img
                            className="w-[18px] h-[18px]"
                            alt=""
                            src="/images/blog/bt.png"
                          />
                        </a>
                      </div>
                      <div>
                        <a href="" target="_blank">
                          {" "}
                          <img
                            className="w-[18px] h-[18px]"
                            alt="bringin image"
                            src="/images/blog/bf.png"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-5 lg:w-[790px] md:w-[626px] w-[350px]">
                <div className="flex gap-3 items-center">
                  <img
                    alt="bringin image"
                    src={i1}
                    className="w-[28px] h-[28px] transform -scale-x-100"
                  />
                  <p>Previous Post</p>
                </div>
                <div className="flex gap-3 items-center">
                  <p>Next Post</p>
                  <img
                    alt="bringin image"
                    src={i1}
                    className="w-[28px] h-[28px]"
                  />
                </div>
              </div>

              <div className="mt-20 lg:w-[816px] md:w-[626px] w-[350px]">
                <div>
                  <h1 className="text-[20px] font-medium">
                    This post has 2 Comments
                  </h1>
                  <div className="h-[1px] mt-4 bg-[#80CFED]"></div>
                </div>

                <div>
                  <div>
                    <div className="">
                      {blogs.map((ca) => {
                        return (
                          <div key={ca._id} className="flex gap-4 mt-12">
                            <img
                              alt="bringin image"
                              src={Ellipse}
                              className="w-10 h-10 rounded rounded-full"
                            />

                            <div className="">
                              <div>
                                <p className="text-[#646668]">{ca.name}</p>
                                <p className="text-[#646668]">
                                  {ca.published_date}
                                </p>
                                <p className="mt-2 text-[#646668]">
                                  {ca.comment}
                                </p>
                              </div>
                              <div className="mt-7">
                                <form>
                                  <p className="flex justify-end text-[18px] text-[#4DBDE6] mr-7">
                                    Reply
                                  </p>
                                  <input
                                    placeholder=""
                                    className="outline-none pl-5 lg:w-[700px] md:w-[700px]"
                                  />
                                  <div className="h-[0.6px] mt-2 lg:w-[700px] md:w-[700px] bg-[#0077B5]"></div>
                                </form>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="lg:ml-0 md:ml-[140px] ml-0 ">
                  <div className="lg:w-[800px] md:w-[540px] w-full lg:h-[450px] border-[1px] border-[#80CFED] rounded mt-12 p-5 ">
                    <h1 className="text-[25px] font-semibold">
                      Leave a Comment
                    </h1>
                    <div>
                      <form onSubmit={handleSubmit(handleAddProduct)}>
                        <div className="lg:flex gap-x-20 mt-5 ">
                          <div className="form-control mb-5">
                            <label className="label">
                              {" "}
                              <span className="label-text">Name</span>
                            </label>
                            <input
                              type="text"
                              {...register("name", {
                                required: "Name is Required",
                              })}
                              className=" border-[1px] border-[#80CFED] text-gray-900 text-sm   block lg:w-[250px] md:w-[200px] w-full py-2.5 px-5"
                            />
                            {errors.phoneName && (
                              <p className="text-red-500">
                                {errors.name.message}
                              </p>
                            )}
                          </div>
                          <div className="form-control mb-5">
                            <label className="label">
                              {" "}
                              <span className="label-text">Email</span>
                            </label>
                            <input
                              type="text"
                              {...register("email", {
                                required: "Email is Required",
                              })}
                              className=" w-1/2  border-[1px] border-[#80CFED]  text-sm  block lg:w-[250px]  md:w-[200px] w-full py-2.5 px-5"
                            />
                            {errors.phoneName && (
                              <p className="text-red-500">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                          <input type="checkbox" />
                          <p className="text-[18px]">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </p>
                        </div>

                        <p className="text-[18px] font-medium my-2 ">
                          Your Comment
                        </p>

                        <div className="form-control mb-5">
                          <textarea
                            type="text"
                            {...register("comment", {
                              required: "Comment is Required",
                            })}
                            className="bg-gray-50 border-[1px] border-[#80CFED] input text-gray-900 text-sm  block w-full lg:h-[160px] md:h-[200px] h-[100px] pt-[10px] input-start"
                          />
                          {errors.phoneName && (
                            <p className="text-red-500">
                              {errors.comment.message}
                            </p>
                          )}
                        </div>

                        <div className="flex justify-center mt-[70px]">
                          <input
                            className="w-[231px] h-[60px] bg-[#0077B5] rounded coursor-pointer font-medium text-white text-[20px] text-center cursor-pointer"
                            value="Submit Comment"
                            type="submit"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
          <div className="col-span-2 my-[75px] ">
            <div className="flex gap-1 items-center mb-5">
              <div>
                <img alt="bringin image" src={Group} />
              </div>
              <div className="lg:w-[816px] md:w-[626px] w-[350px]">
                <h1 className="text-[12px] text-[#8C8C8C] ">
                  Home / {service?.categoryName ? service.categoryName : ""} /{" "}
                  {service?.blogTitle ? service.blogTitle : ""}
                  Your Last Job”
                </h1>
              </div>
            </div>
            <div className="flex gap-7 mb-[25px] ">
              {cetagor.map((ca) => {
                return (
                  <Link key={ca._id} to={`/catagory/blogs/${ca.categoryName}`}>
                    <p
                      className="lg:text-[16px] md:text-[15px] text-[12px] text-white bg-[#0077B5] py-1 lg:px-5 md:px-3 px-2 rounded"
                      key={ca._id}
                    >
                      {ca.categoryName}
                    </p>
                  </Link>
                );
              })}
            </div>

          

            
          </div> */}
          <div className="">
            <div>
              <div className="mt-[30px] lg:ml-0 md:ml-[230px]">
                <div className="">
                  <div className="mb-[30px]">
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      placeholder="Search..."
                      className="focus:outline-none  w-[365px] h-[45px] bg-[#F6F6F6] pl-10 rounded rounded-[5px]	"
                    />
                  </div>
                  <div className="w-[365px] pb-24   bg-[#F6F6F6] p-5 rounded rounded-[5px]">
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
                              alt="bringin image"
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
                              <img src={c} alt="bringin image" />
                              <p className="text-[10px]">
                                {re.published_date.slice(0, 8)}
                              </p>
                            </div>{" "}
                            <p className="text-[10px]">
                              By Bringin Career Guide
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="my-[39px]">
                  <div className="">
                    <div className="w-[365px] h-[637px]   bg-[#F6F6F6] p-5 rounded rounded-[5px]">
                      <div className="border-b-[3px] w-[115px]  border-[#0077B5] ">
                        <p className="text-[16px] font-medium pb-[10px] text-[#212427]">
                          Blog categories
                        </p>
                      </div>

                      {cetagory.map((ca) => {
                    return (
                      <Link
                        key={ca._id}
                        to={`/catagory/blogs/${ca.categoryName}`}
                      >
                        <div className="mt-5 flex gap-4 justify-between mb-2 ">
                          <p className="text-[16px] text-[#212427] text-opacity-90">{ca.categoryName}</p>
                          <img
                            alt="bringin image"
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

                <div className="my-10">
                  <div className="w-[365px] h-[300px] bg-[#F6F6F6]  border-t-[1px] border-[#00A0DC]">
                    <img src="/images/blog/bsi.png" />

                    <p className="text-[20px] text-[#177CC6] px-4 py-3">
                      What is the best technical profession in 2023.
                    </p>
                  </div>
                </div>
                <div className="my-10">
                  <div className="w-[365px] h-[129px] bg-[#F6F6F6] border-t-[2px] border-[#00A0DC]  border-t-[1px] border-[#00A0DC]">
                    <div className="px-4 py-3">
                      <p className="text-[20px] text-[#177CC6] ">
                        What is the best technical profession in 2023.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-[16px] text-[#177CC6] ">READ MORE</p>
                        <img className="h-[17px]" src="/images/ri.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:mt-[130px] mt-[70px] mt-[30px]">
          <AppLogo></AppLogo>
        </div>
      </div>
    </div>
  );
};

export default Details;
