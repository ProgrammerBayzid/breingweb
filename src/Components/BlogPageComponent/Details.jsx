import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AppLogo from "../App/AppLogo";
import Spinner from "../Spinner/Spinner";
import { useForm } from "react-hook-form";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
const Details = () => {
 
  const service = useLoaderData();
  const {
    authorName,
    blogTitle,
    published_date,
    description,
    details,
    img,
    linkedin,
    facebook,
    twiter,
  } = service;
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

  function formatDate(publishedDate) {
    // Split the date string into parts
    const dateParts = publishedDate.split("/");
    const day = dateParts[1]; // Switch day and month positions
    const month = dateParts[0]; // Switch day and month positions
    const year = dateParts[2];

    // Create an array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Format the date as "DayMonth-Year"
    const formattedDate = `${day}${monthNames[parseInt(month) - 1]}-${year}`;

    return formattedDate;
  }
  // const formattedDate = formatDate(published_date.slice(0, published_date[8] === ',' ? 8 : 10));
  const formattedDate = formatDate(
    published_date[8] === ","
      ? published_date.slice(0, 8)
      : published_date.slice(0, 10) || published_date[9] === ","
      ? published_date.slice(0, 9)
      : published_date.slice(0, 10) || published_date[10] === ","
      ? published_date.slice(0, 10)
      : published_date.slice(0, 10)
  );
  console.log(formattedDate);
  const crrountPageLocation = window.location.href;

  const handleFacebookShare = (url) => {
    const shareUrl = url; // Replace with your URL
    const shareTitle = "Check out this awesome content!"; // Replace with your title
    const hashtags = "#BringinInstantHiringApp"; // Replace with your desired hashtags, separated by commas
    console.log(url);
    // Encode the URL, title, and hashtags
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedHashtags = encodeURIComponent(hashtags);

    // Construct the Facebook share URL with title and hashtags
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&title=${encodedTitle}&hashtag=${encodedHashtags}`;

    // Open the Facebook share URL in a new tab/window
    window.open(facebookShareUrl, "_blank");
  };
  const handleTwiterShare = (url) => {
    const shareUrl = url; // Replace with your URL
    const shareTitle = "Check out this awesome content!"; // Replace with your title
    const hashtags = "#BringinInstantHiringApp"; // Replace with your desired hashtags, separated by commas
    console.log(url);
    // Encode the URL, title, and hashtags
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedHashtags = encodeURIComponent(hashtags);

    // Construct the Facebook share URL with title and hashtags
    const facebookShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&title=${encodedTitle}&hashtag=${encodedHashtags}`;

    // Open the Facebook share URL in a new tab/window
    window.open(facebookShareUrl, "_blank");
  };

  const handleLinkedInShare = (url) => {
    const shareUrl = url; // Replace with your URL
    const shareTitle = "Check out this awesome content!"; // Replace with your title
    const hashtags = "#BringinInstantHiringApp"; // Replace with your desired hashtags, separated by commas
    console.log(shareUrl);
    // Encode the URL, title, and hashtags
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedHashtags = encodeURIComponent(hashtags);

    // Construct the LinkedIn share URL with hashtags
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary_hashtags=${encodedHashtags}`;

    // Open the LinkedIn share URL in a new tab/window
    window.open(linkedInShareUrl, "_blank");
  };

  if (isLoding === false) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="lg:mx-[40px] md:mx-[10px] mx-[10px]">
      <div className="my-1">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 ">
          <div className="col-span-2 lg:flex-none flex justify-center">
            <div className=" my-[35px] ">
              <div className="lg:w-[800px] ">
                <div className="">
                  <div className="lg:w-[800px] lg:h-[260px] bg-[#0077B5] flex justify-center items-center">
                    <div>
                      <div className="lg:flex lg:flex-row-reverse lg:justify-between md:flex md:flex-row-reverse md:justify-between lg:gap-x-5 lg:px-[50px]">
                        <LazyLoadImage
                          effect="blur"
                          loading="lazy"
                          className="lg:w-[300px] lg:h-[175px]"
                          src={img}
                        />

                        <div className="px-3 py-2">
                          <div className="flex gap-1 mt-2 items-center">
                            <p className="text-white text-[12px]">
                              by {authorName}
                            </p>
                            <LazyLoadImage
                              effect="blur"
                              loading="lazy"
                              className="w-[2px] h-[11px]"
                              alt="bringin image"
                              src="/images/blog/bdmi.png"
                            />{" "}
                            <p className="text-white text-[12px]">
                              {formattedDate}
                            </p>
                            <LazyLoadImage
                              effect="blur"
                              loading="lazy"
                              className="w-[2px] h-[11px]"
                              alt="bringin image"
                              src="/images/blog/bdmi.png"
                            />{" "}
                            <p className="text-white text-[12px]">
                              No Comments
                            </p>
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
                                <button
                                  onClick={() =>
                                    handleLinkedInShare(crrountPageLocation)
                                  }
                                >
                                  <LazyLoadImage
                                    effect="blur"
                                    loading="lazy"
                                    className="w-[18px] h-[18px] cursor-pointer"
                                    alt="bringin image"
                                    src="/images/blog/bi1.png"
                                  />
                                </button>
                              </div>
                              <div className="pr-1">
                                <button
                                  onClick={() =>
                                    handleTwiterShare(crrountPageLocation)
                                  }
                                >
                                  <LazyLoadImage
                                    effect="blur"
                                    loading="lazy"
                                    className="w-[18px] h-[18px] cursor-pointer"
                                    alt=""
                                    src="/images/blog/bt1.png"
                                  />
                                </button>
                              </div>
                              <div>
                                {/* <a href={facebook} target="_blank">
                                  {" "}
                                </a> */}
                                <button
                                  onClick={() =>
                                    handleFacebookShare(crrountPageLocation)
                                  }
                                >
                                  <LazyLoadImage
                                    effect="blur"
                                    loading="lazy"
                                    className="w-[18px] h-[18px] cursor-pointer"
                                    alt="bringin image"
                                    src="/images/blog/bf1.png"
                                  />
                                </button>
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
                  <div className="lg:w-[800px] md:w-[540px] w-full h-[52px] border-2 px-2 border-[#0077B5] rounded lg:mt-36 mt-16  flex items-center">
                    <div className="flex lg:gap-20 md:gap-12 gap-5  lg:ml-5 items-center">
                      <div>
                        <p className="text-[16px] font-medium">
                          Share This Post
                        </p>
                      </div>
                      <div className="flex gap-x-3 ">
                        <div className="mr-1">
                          {/* <a href="" target="_blank">
                            {" "}
                          </a> */}
                          <button
                            onClick={() =>
                              handleLinkedInShare(crrountPageLocation)
                            }
                          >
                            <LazyLoadImage
                              effect="blur"
                              loading="lazy"
                              className="w-[18px] h-[18px]"
                              alt="bringin image"
                              src="/images/blog/bi.png"
                            />
                          </button>
                        </div>
                        <div className="pr-1">
                          <button
                            onClick={() =>
                              handleTwiterShare(crrountPageLocation)
                            }
                          >
                            <LazyLoadImage
                              effect="blur"
                              loading="lazy"
                              className="w-[18px] h-[18px]"
                              alt=""
                              src="/images/blog/bt.png"
                            />
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() =>
                              handleFacebookShare(crrountPageLocation)
                            }
                          >
                            <LazyLoadImage
                              effect="blur"
                              loading="lazy"
                              className="w-[18px] h-[18px]"
                              alt="bringin image"
                              src="/images/blog/bf.png"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-5 lg:w-[790px] md:w-[626px] w-[350px]">
                  <div className="flex gap-3 items-center">
                    <LazyLoadImage
                      effect="blur"
                      loading="lazy"
                      alt="bringin image"
                      src="/images/about/Group 11884.svg"
                      className="w-[28px] h-[28px] transform -scale-x-100"
                    />
                    <p>Previous Post</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <p>Next Post</p>
                    <LazyLoadImage
                      effect="blur"
                      loading="lazy"
                      alt="bringin image"
                      src="/images/about/Group 11884.svg"
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
                          const { published_date } = ca;
                          const formattedDatec = formatDate(
                            published_date[8] === ","
                              ? published_date.slice(0, 8)
                              : published_date.slice(0, 10) ||
                                published_date[9] === ","
                              ? published_date.slice(0, 9)
                              : published_date.slice(0, 10) ||
                                published_date[10] === ","
                              ? published_date.slice(0, 10)
                              : published_date.slice(0, 10)
                          );
                          return (
                            <div key={ca._id} className="flex gap-4 mt-12">
                              <LazyLoadImage
                                effect="blur"
                                loading="lazy"
                                alt="bringin image"
                                src="/images/blogdetails/Ellipse 7.svg"
                                className="w-10 h-10 rounded rounded-full"
                              />

                              <div className="">
                                <div>
                                  <p className="text-[#646668]">{ca.name}</p>
                                  <p className="text-[#646668]">
                                    {formattedDatec}
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
                              Save my name, email, and website in this browser
                              for the next time I comment.
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
                              className="bg-gray-50 border-[1px] pl-3 border-[#80CFED] input text-gray-900 text-sm  block w-full lg:h-[160px] md:h-[200px] h-[100px] pt-[10px] input-start"
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
          </div>

          <div className=" lg:flex-none md:flex-none flex justify-center">
            <div>
              <div className="mt-[30px] ">
                <div className="">
                  <div className="mb-[30px]">
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      placeholder="Search..."
                      className="focus:outline-none  lg:w-[365px] w-[300px] h-[45px] bg-[#F6F6F6] pl-10 rounded rounded-[5px]	"
                    />
                  </div>
                  <div className="lg:w-[365px] w-[300px] pb-24   bg-[#F6F6F6] p-5 rounded rounded-[5px]">
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
                      .map((re) => {
                        const { published_date } = re;
                        const formattedDates = formatDate(
                          published_date[8] === ","
                            ? published_date.slice(0, 8)
                            : published_date.slice(0, 10) ||
                              published_date[9] === ","
                            ? published_date.slice(0, 9)
                            : published_date.slice(0, 10) ||
                              published_date[10] === ","
                            ? published_date.slice(0, 10)
                            : published_date.slice(0, 10)
                        );
                        return (
                          <div key={re._id} className="mt-10 flex gap-4">
                            <div className="">
                              <LazyLoadImage
                                effect="blur"
                                loading="lazy"
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
                                <LazyLoadImage
                                  effect="blur"
                                  src="/images/commonlogo/go.svg"
                                  alt="bringin image"
                                />
                                <p className="text-[10px]">{formattedDates}</p>
                              </div>{" "}
                              <p className="text-[10px]">
                                By Unbolt Career Guide
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                <div className="my-[39px]">
                  <div className="">
                    <div className="lg:w-[365px] w-[300px] h-[637px]   bg-[#F6F6F6] p-5 rounded rounded-[5px]">
                      <div className="border-b-[3px] w-[115px]  border-[#0077B5] ">
                        <p className="text-[16px] font-medium pb-[10px] text-[#212427]">
                          Blog categories
                        </p>
                      </div>

                      {cetagory.map((ca) => {
                        return (
                          <Link
                            key={ca._id}
                            to={`/catagory/blog/${ca.categoryName}`}
                          >
                            <div className="mt-5 flex gap-4 justify-between mb-2 ">
                              <p className="text-[16px] text-[#212427] text-opacity-90">
                                {ca.categoryName}
                              </p>
                              <LazyLoadImage
                                effect="blur"
                                loading="lazy"
                                alt="bringin image"
                                src="/images/commonlogo/Vector.svg"
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
                  <div className="lg:w-[365px] w-[300px] h-[300px] bg-[#F6F6F6]  border-t-[1px] border-[#00A0DC]">
                    <LazyLoadImage effect="blur" src="/images/blog/bsi.png" />

                    <p className="text-[20px] text-[#177CC6] px-4 py-3 font-light	">
                      What is the best technical profession in 2023.
                    </p>
                  </div>
                </div>
                <div className="my-10">
                  <div className="lg:w-[365px] w-[300px] h-[129px] bg-[#F6F6F6] border-t-[2px] border-[#00A0DC]  border-t-[1px] border-[#00A0DC]">
                    <div className="px-4 py-3">
                      <p className="text-[20px] text-[#177CC6] font-light	 ">
                        What is the best technical profession in 2023.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-[16px] text-[#177CC6] font-light	">
                          READ MORE
                        </p>
                        <LazyLoadImage
                          effect="blur"
                          className="h-[17px]"
                          src="/images/ri.png"
                        />
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
