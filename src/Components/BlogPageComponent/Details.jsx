import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AppLogo from "../App/AppLogo";
import l from "../../assets/guidline/Line 12.svg";
import Spinner from "../Spinner/Spinner";
import Vector from "../../assets/commonlogo/Vector.svg";
import facebook from "../../assets/blogdetails/facebook.svg";
import twitter from "../../assets/blogdetails/twitter.svg";
import Ellipse  from "../../assets/blogdetails/Ellipse 7.svg";
import i1 from "../../assets/about/Group 11884.svg";
import { useForm } from "react-hook-form";
import useTitle from "../../hooks/useTitle";
import Group from "../../assets/blog/Group.svg";
import c from "../../assets/commonlogo/go.svg";


const Details = () => {
  useTitle("Blogs Details- Bringin");

  const service = useLoaderData();
  const {authorName, blogTitle, published_date, description, details, img} =service;
  console.log(service);
  const [cetagory, setCetagory] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [refresh, setRefresh] = useState(true)
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
      blogId:service._id,
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
        setRefresh(!refresh)
        e.target.reset();
                console.log(result);
        
      });
  };

  if (isLoding === false) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
      <div className="p">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
          <div className="col-span-2 my-[75px] ">
            <div className="flex gap-1 items-center mb-5">
              <div>
                <img alt="" src={Group} />
              </div>
              <div>
                <h1 className="text-[12px] text-[#8C8C8C] ">
                  Home / {service?.categoryName? service.categoryName : ''} / {service?.blogTitle? service.blogTitle : ''}
                  Your Last Job”
                </h1>
              </div>
            </div>
            <div className="flex gap-7 mb-[25px]">
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

            <div>
              <h1 className="lg:text-[30px] md:text-[25px] text-[20px] font-semibold">
                {blogTitle}
              </h1>
              <div className="flex gap-5 mt-2">
                <p className="text-[#4D5052]">by {authorName}</p>
                <img className="w-[3px]" alt="" src={l} />{" "}
                <p className="text-[#4D5052]">{published_date.slice(0,8)}</p>
                <img className="w-[3px]" alt="" src={l} />{" "}
                <p className="text-[#4D5052]">No Comments</p>
              </div>
              <div className="mt-4">
                <img
                  alt=""
                  src={img}
                  className="lg:w-[816px] lg:h-[452px] md:w-[626px] w-[350px] rounded"
                />
              </div>

              <div className="mt-4 pr-5 lg:w-[816px] md:w-[626px] w-[350px]">
                <p className="mb-4 text-[#4D5052]">
                  {description}
                </p>

                <div dangerouslySetInnerHTML={{ __html: details }} />

              </div>
            </div>

            <div className="lg:ml-0 md:ml-[140px] ml-0">
              <div className="lg:w-[840px] md:w-[540px] w-full h-[92px] border-2 border-[#0077B5] rounded mt-36  ">
                <div className="flex lg:gap-20 md:gap-12 gap-5 mt-4 lg:ml-20 items-center">
                  <div>
                    <p className="text-[25px] font-semibold">Share This Post</p>
                  </div>
                  <div className="flex gap-4">
                    <img alt="" src={facebook} className="w-[55px]" />
                    <img alt="" src={twitter} className="w-[55px]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-5">
              <div className="flex gap-3 items-center">
                <img
                  alt=""
                  src={i1}
                  className="w-[28px] h-[28px] transform -scale-x-100"
                />
                <p>Previous Post</p>
              </div>
              <div className="flex gap-3 items-center">
                <p>Next Post</p>
                <img alt="" src={i1} className="w-[28px] h-[28px]" />
              </div>
            </div>

            <div className="mt-20">
              <div>
                <h1 className="text-[20px] font-semibold">
                  This post has 2 Comments
                </h1>
                <div className="h-[1px] mt-4 bg-[#0077B5]"></div>
              </div>

              <div>
                <div>
                  <div className="">
                    {blogs.map((ca) => {
                      return (
                        <div key={ca._id} className="flex gap-4 mt-12">
                          <img
                            alt=""
                            src={Ellipse }
                            className="w-10 h-10 rounded rounded-full"
                          />

                          <div className="">
                            <div>
                              <p className="text-[#646668]">{ca.name}</p>
                              <p className="text-[#646668]">{ca.published_date}</p>
                              <p className="mt-2 text-[#646668]">
                                {ca.comment}
                              </p>
                            </div>
                            <div className="mt-7">
                              <form>

                              <p className="flex justify-end text-[18px] text-[#4DBDE6] mr-7">
                                Reply
                              </p>
                              <input placeholder="" className="outline-none pl-5 lg:w-[700px] md:w-[700px]"/>
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
                <div className="lg:w-[840px] md:w-[540px] w-full lg:h-[750px] border-[1px] border-[#0077B5] rounded mt-12 p-5 ">
                  <h1 className="text-[25px] font-semibold">Leave a Comment</h1>
                  <div>
                    <form onSubmit={handleSubmit(handleAddProduct)}>
                      <div className="lg:flex gap-5 mt-5 ">
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
                            className="bg-gray-50 border-[1px] border-[#0077B5] input text-gray-900 text-sm rounded-lg  block lg:w-[350px] md:w-[300px] w-full py-2.5 px-5"
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
                            className=" w-1/2 bg-gray-50 border-[1px] border-[#0077B5] input text-sm rounded-lg  block lg:w-[350px]  md:w-[300px] w-full py-2.5 px-5"
                          />
                          {errors.phoneName && (
                            <p className="text-red-500">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2 mt-7">
                        <input type="checkbox" />
                        <p>
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </p>
                      </div>

                      <div className="form-control mb-5">
                        <label className="label">
                          {" "}
                          <span className="label-text">Your Comment</span>
                        </label>
                        <textarea
                          type="text"
                          {...register("comment", {
                            required: "Comment is Required",
                          })}
                          className="bg-gray-50 border-[1px] border-[#0077B5] input text-gray-900 text-sm  block w-full lg:h-[300px] md:h-[200px] h-[100px] pt-[10px] input-start"
                        />
                        {errors.phoneName && (
                          <p className="text-red-500">
                            {errors.comment.message}
                          </p>
                        )}
                      </div>

                      <div className="flex justify-center">
                        <input
                          className="w-[281px] h-[70px] bg-[#0077B5] rounded coursor-pointer font-medium text-white text-[25px] text-center cursor-pointer"
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
          <div className=" lg:ml-0 md:ml-[220px] ml-0">
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
                  {
                  recent .filter((re) => {
                    return search.toLocaleLowerCase() === ""
                      ? re
                      : re.blogTitle.toLocaleLowerCase().includes(search);
                  }).map((re)=>
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
                  )
                }
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
                    {cetagori.map((ca) => {
                      return (
                        <Link key={ca._id} to={`/catagory/blogs/${ca.categoryName}`}>
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
    </div>
  );
};

export default Details;
