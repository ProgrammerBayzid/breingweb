import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import AppLogo from "../App/AppLogo";
import App from "../../App.css";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Blogpage = () => {
 
  const [blogs, setBlogs] = useState([]);
  const [cetagory, setCetagory] = useState([]);
  const [recent, setRecent] = useState([]);
  const [bl, setbl] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  console.log(blogs);
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
        // setIsLoding(true);
        setCetagory(data);
      });
  }, []);

  const cetagori = cetagory;
  const cetagor = cetagory.slice(0, 5);

  const filterBlog = (blogData) => {
    const filter = blogs.filter((bl) => bl.categoryName == blogData);
    setbl(filter);
  };

  const [items, setItems] = useState(blogs);
  console.log(items);
  const [cValue, setcValue] = useState("");
  console.log(cValue);
  const handleClick = (value) => {
    setcValue(value);
  };

  const applyFilters = () => {
    let updatedList = blogs;
    console.log(updatedList);

    if (cValue) {
      updatedList = updatedList.filter((item) => item?.categoryName == cValue);
    }

    setItems(updatedList);
  };

  useEffect(() => {
    applyFilters();
  }, [cValue, blogs]);

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
    <div className=" App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs | Unbolt Chat Based Hiring App </title>
        <meta
          name="description"
          content="Unlock valuable insights and expert tips on the Unbolt blogs page. Stay informed, enhance your job search, and boost your career growth with our articles."
        />
        <link rel="canonical" href="http://unbolt.co/blog" />
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
      <div className="my-1 lg:mx-[40px] md:mx-[10px] mx-[10px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-[65px] ">
          <div className="col-span-2 mx-auto ">
            <div>
              <div className="">
                <div className="mt-[30px] grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2   ">
                  {cetagor.map((ca) => {
                    return (
                      <button
                        key={ca._id}
                        onClick={() => {
                          handleClick(ca?.categoryName);
                        }}
                        className="App  button text-[#4C4F51] hover:text-[#0077B5] py-[8px] lg:w-[] md:w-[] w-[170px] lg:h-[60px] bg-[#F9F9F9]  hover:border-b-[1px] hover:border-b-[#0077B5]   border  "
                      >
                        <p className="lg:text-[15px]  text-[12px] font-semibold">
                          {ca.categoryName}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:mt-[30px] mt-[15px]">
              <div className="mt-[15px] grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-7 ">
                {items.map((post) => {
                  const {
                    img,
                    blogTitle,
                    authorName,
                    description,
                    _id,
                    linkedin,
                    facebook,
                    twiter,
                    published_date,
                  } = post;
                  const formattedDate = formatDate(
                    published_date[8] === ","
                      ? published_date.slice(0, 8)
                      : published_date.slice(0, 10) || published_date[9] === ","
                      ? published_date.slice(0, 9)
                      : published_date.slice(0, 10) ||
                        published_date[10] === ","
                      ? published_date.slice(0, 10)
                      : published_date.slice(0, 10)
                  );

                  return (
                    <div key={_id}>
                      <div className="lg:w-[800px] lg:h-[195px]  w-[300px] border-b-[0.7px]  border-gray">
                        <div className="">
                          <div className="lg:w-[800px] lg:h-[180px]  w-[300px]  ">
                            <div className="lg:flex gap-x-[30px] ">
                              <div className="">
                                <LazyLoadImage
                                  effect="blur"
                                  loading="lazy"
                                  className="object-cover w-[320px]  h-[180px]"
                                  src={img}
                                />
                              </div>
                              <div>
                                <div>
                                  <div className="flex gap-x-1 lg:mt-0 md:mt-0 mt-4 text-[12px] items-center">
                                    <p className="text-[#4D5052]">
                                      {formattedDate} by {authorName}
                                    </p>

                                    <p>|</p>

                                    <p className="text-[#4D5052]">
                                      No Comments
                                    </p>
                                  </div>
                                  <Link to={`/blog/${_id}`}>
                                    <p className="lg:text-[21px] font-light	 text-[18px] text-[#177CC6] my-[7px]">
                                      {blogTitle}
                                    </p>
                                  </Link>
                                  <p className="text-[15px] text-[#212427] mb-[7px]">
                                    {description && description.length > 100 ? (
                                      <div className="">
                                        <p>
                                          {description.slice(0, 100) +
                                            " " +
                                            "..."}{" "}
                                          <Link to={`/blog/${_id}`}>
                                            <span className="text-[#00679C] text-[15px]">
                                              READ MORE{" "}
                                            </span>
                                          </Link>
                                        </p>
                                      </div>
                                    ) : (
                                      <p>
                                        {description}{" "}
                                        <Link to={`/blog/${_id}`}>
                                          <span className="text-[#00679C] text-[15px]">
                                            READ MORE{" "}
                                          </span>
                                        </Link>
                                      </p>
                                    )}
                                  </p>

                                  <div className="flex items-center gap-[50px]">
                                    <p className="text-[15px] text-[#212427] font-medium">
                                      Interviews Tips
                                    </p>
                                    <div>
                                      <div className="flex gap-x-3">
                                        <div className="mr-1">
                                          <button
                                            onClick={() =>
                                              handleLinkedInShare(
                                                `${window.location.href}/${_id}`
                                              )
                                            }
                                          >
                                            <LazyLoadImage
                                              effect="blur"
                                              loading="lazy"
                                              className="w-[18px] h-[18px] cursor-pointer"
                                              alt="bringin image"
                                              src="/images/blog/bi.png"
                                            />
                                          </button>
                                        </div>
                                        <div className="pr-1">
                                          <button
                                            onClick={() =>
                                              handleTwiterShare(
                                                `${window.location.href}/${_id}`
                                              )
                                            }
                                          >
                                            <LazyLoadImage
                                              effect="blur"
                                              loading="lazy"
                                              className="w-[18px] h-[18px] cursor-pointer"
                                              alt=""
                                              src="/images/blog/bt.png"
                                            />
                                          </button>
                                        </div>
                                        <div>
                                          <button
                                            onClick={() =>
                                              handleFacebookShare(
                                                `${window.location.href}/${_id}`
                                              )
                                            }
                                          >
                                            <LazyLoadImage
                                              effect="blur"
                                              loading="lazy"
                                              className="w-[18px] h-[18px] cursor-pointer"
                                              alt="bringin image"
                                              src="/images/blog/bf.png"
                                            />
                                          </button>
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:flex-none flex justify-center">
            <div className="">
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
                      <p className="text-[16px] font-light	 text-[#212427] pb-[10px] ">
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
                                alt="bringin image"
                                src={re.img}
                                className="object-cover w-[120px] h-[75px] rounded"
                              />
                            </div>
                            <div className="w-50%">
                              <Link to={`/blog/${re._id}`}>
                                <h1 className="text-[15px] font-medium text-[#212427] ">
                                  {re.blogTitle}
                                </h1>
                              </Link>
                              <div className="flex gap-[1px]">
                                <LazyLoadImage
                                  effect="blur"
                                  src="/images/commonlogo/go.svg"
                                  alt="bringin image"
                                />
                                <p className="text-[10px] text-[#212427] text-opacity-90">
                                  {formattedDates}
                                </p>
                              </div>{" "}
                              <p className="text-[10px] text-[#212427] text-opacity-90">
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
                        <p className="text-[16px] font-medium pb-[10px] text-[#212427] ">
                          Blog categories
                        </p>
                      </div>

                      {cetagori.map((ca) => {
                        return (
                          <Link
                            key={ca._id}
                            to={`/blog/categoriess/${ca.categoryName}`}
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
                  <div className="lg:w-[365px] w-[300px] h-[300px] bg-[#F6F6F6] border-t-[2px]  border-[#0077B5]">
                    <LazyLoadImage effect="blur" src="/images/blog/bsi.png" />

                    <p className="text-[20px] text-[#177CC6] px-4 py-3 font-light	">
                      What is the best technical profession in 2023.
                    </p>
                  </div>
                </div>
                <div className="my-5 lg:my-10">
                  <div className="lg:w-[365px] w-[300px] h-[129px] bg-[#F6F6F6] border-t-[2px] border-[#00A0DC]">
                    <div className="px-4 py-3">
                      <p className="text-[20px] text-[#177CC6] ">
                        What is the best technical profession in 2023.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-[16px] text-[#177CC6] ">READ MORE</p>
                        <LazyLoadImage
                          effect="blur"
                          loading="lazy"
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
      </div>
      <div className="flex justify-center lg:mt-10 mt-5">
        <AppLogo></AppLogo>
      </div>
    </div>
  );
};

export default Blogpage;
