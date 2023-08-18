import { Link } from "react-router-dom";

const Singlecandidate = ({ singlecanditade }) => {
  console.log(singlecanditade);
  const { education, userid, careerPreference, workexperience, _id, skill } =
    singlecanditade;
  const first = careerPreference[0];
  const edu = education[0];
  console.log(first);
  return (
    <div>
    <div className="lg:w-[845px] lg:h-[243px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:px-7 lg:py-7 p-2 mb-10 bg-white w-[330px] rounded">
      <div className="lg:flex gap-x-5">
        <div className="flex gap-2 ">
          <div className=" lg:ml-5  ">
            <div>
              <img
                alt=""
                src="/images/candidate/Group 10464.svg"
                className=" rounded lg:w-24 w-[60px] lg:ml-7 ml-[10px]"
              ></img>
            </div>
            <Link to={`/profile/${_id}`}>
              <button className="rounded rounded-full lg:text-[16px] text-[12px]   lg:font-semibold font-medium border-[1px] border border-black hover:text-white text-black hover:border-[#0077B5] hover:bg-[#0077B5] lg:h-[40px] h-[20px] lg:w-[120px]  w-[80px] mt-2 lg:mt-7">
                View Profile
              </button>
            </Link>
          </div>

          <div>
            <h1 className="lg:text-[20px] text-[14px] font-semibold flex block lg:hidden ">
              <div className="flex items-center">
                <p>
                  {userid?.fastname ? userid?.fastname : ""}{" "}
                  {userid?.lastname ? userid?.lastname : ""}
                </p>
                <img
                  alt=""
                  src="/images/profile/Ellipse 153.svg"
                  className="lg:px-[5px] w-1 mx-1"
                />
              </div>{" "}
              {workexperience?.map((w) => (
                <p key={w._id}>{w?.designation ? w?.designation : ""}</p>
              ))}
            </h1>

            <div className="block lg:hidden ">
              <div className="flex gap-3 mt-[7px]">
                {edu ? (
                  <div className="rounded rounded-[20px] border borded-[#5C6565]">
                    <div>
                      <p className="px-[4px] py-[2px] text-[#5C6565] text-[10px]">
                        {edu?.digree?.name ? edu?.digree?.name : ""}
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {userid?.experiencedlevel?.name ? (
                  <div className="  rounded rounded-[20px] border borded-[#5C6565] ">
                    <p className="px-[4px] py-[2px] text-[#5C6565] text-[10px]">
                      {userid?.experiencedlevel?.name
                        ? userid?.experiencedlevel?.name
                        : ""}
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {first?.salaray?.min_salary?.salary ? (
                  <div className="  rounded rounded-[20px] border borded-[#5C6565] ">
                    <p className="px-[4px] py-[2px] text-[#5C6565] text-[10px]">
                      {/* {first?.salaray?.salary? first?.salaray?.salary : "00K"}{" "}{first?.salaray?.currency? first?.salaray?.currency : "BDT"} */}
                      {first?.salaray?.min_salary?.salary
                        ? first?.salaray?.min_salary?.salary
                        : "00"}
                      {first?.salaray?.min_salary?.salary == "Negotiable"
                        ? ""
                        : "-"}
                      {first?.salaray?.max_salary?.salary == "Negotiable"
                        ? ""
                        : first?.salaray?.max_salary?.salary}
                      {first?.salaray?.min_salary?.salary == "Negotiable"
                        ? ""
                        : "K"}{" "}
                      {first?.salaray?.min_salary?.salary == "Negotiable"
                        ? ""
                        : "BDT"}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[20px] font-semibold flex hidden lg:block ">
            <div className="flex ">
              <p>
                {userid?.fastname ? userid?.fastname : ""}{" "}
                {userid?.lastname ? userid?.lastname : ""}
              </p>
              <img
                alt=""
                src="/images/profile/Ellipse 153.svg"
                className="px-[5px]"
              />
            </div>{" "}
            {workexperience?.map((w) => (
              <p key={w._id}>{w?.designation ? w?.designation : ""}</p>
            ))}
          </h1>
          <div className=" lg:flex justity-between ">
            <div className="">
              <div className="hidden lg:block">
                <div className="flex gap-3 mt-[7px]">
                  {edu ? (
                    <div className="rounded rounded-[20px] border borded-[#5C6565]">
                      <div>
                        <p className="px-1 py-1 text-[#5C6565] text-[14px] ">
                          {edu?.digree?.name ? edu?.digree?.name : ""}
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {userid?.experiencedlevel?.name ? (
                    <div className="  rounded rounded-[20px] border borded-[#5C6565] ">
                      <p className="px-1 py-1 text-[#5C6565] text-[13px]">
                        {userid?.experiencedlevel?.name
                          ? userid?.experiencedlevel?.name
                          : ""}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {first?.salaray?.min_salary?.salary ? (
                    <div className="  rounded rounded-[20px] border borded-[#5C6565] ">
                      <p className="px-1 py-1 text-[#5C6565] text-[13px]">
                        {/* {first?.salaray?.salary? first?.salaray?.salary : "00K"}{" "}{first?.salaray?.currency? first?.salaray?.currency : "BDT"} */}
                        {first?.salaray?.min_salary?.salary
                          ? first?.salaray?.min_salary?.salary
                          : "00"}
                        {first?.salaray?.min_salary?.salary == "Negotiable"
                          ? ""
                          : "-"}
                        {first?.salaray?.max_salary?.salary == "Negotiable"
                          ? ""
                          : first?.salaray?.max_salary?.salary}
                        {first?.salaray?.min_salary?.salary == "Negotiable"
                          ? ""
                          : "K"}{" "}
                        {first?.salaray?.min_salary?.salary == "Negotiable"
                          ? ""
                          : "BDT"}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {workexperience ? (
                <div className="mt-[20px] flex gap-2">
                  <div>
                    {" "}
                    <img
                      alt="bringin image"
                      src="/images/logo/job.svg"
                      className=" rounded w-[18px] h-[19px] mt-[2px]"
                    ></img>
                  </div>
                  <div className="">
                    {workexperience?.map((w) => (
                      <div key={w._id}>
                        <p className="lg:text-[17px] text-[14px] font-medium">
                          {w?.companyname ? w?.companyname : ""}
                        </p>
                        <p className="text-[#5C6565]">
                          {w?.startdate ? w?.startdate.slice(0, 9) : ""} -{" "}
                          {w?.enddate ? w?.enddate.slice(0, 9) : ""}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="lg:ml-12 flex gap-2 lg:mt-16 block lg:hidden  mt-[10px]">
                <div>
                  <img
                    alt="bringin image"
                    src="/images/candidate/Group 11727.svg"
                    className=" rounded w-[23px] h-[24px] "
                  ></img>
                </div>

                <div className="">
                  <h1 className="text-[15px] font-medium">
                    {edu?.institutename ? edu?.institutename : ""}
                  </h1>
                  {edu?.startdate ? (
                    <p className="text-[#5C6565]">
                      {edu?.startdate ? edu?.startdate.slice(0, 9) : ""} -{" "}
                      {edu?.enddate ? edu?.enddate.slice(0, 9) : ""}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="">
                {first?.division?.divisionname ? (
                  <div className=" flex gap-2 items-center lg:mt-[55px] mt-[10px]">
                    <div>
                      {" "}
                      <img
                        alt="bringin image"
                        src="/images/logo/locetion.svg"
                        className=" rounded w-[18px] h-[19px] "
                      ></img>
                    </div>
                    <div>
                      <h1 className="lg:text-[17px] text-[14px] font-medium">
                        {first?.division?.cityid?.name
                          ? first?.division?.cityid?.name
                          : ""}
                        ,{" "}
                        {first?.division?.divisionname
                          ? first?.division?.divisionname
                          : ""}
                      </h1>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="">
              <div className="lg:ml-12 flex gap-2 lg:mt-[55px] hidden lg:block">
                <div>
                  <img
                    alt="bringin image"
                    src="/images/candidate/Group 11727.svg"
                    className=" rounded w-[23px] h-[24px] "
                  ></img>
                </div>

                <div className="">
                  <h1 className="text-[15px] font-medium">
                    {edu?.institutename ? edu?.institutename : ""}
                  </h1>
                  {edu?.startdate ? (
                    <p className="text-[#5C6565]">
                      {edu?.startdate ? edu?.startdate.slice(0, 9) : ""} -{" "}
                      {edu?.enddate ? edu?.enddate.slice(0, 9) : ""}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="lg:flex justify-end  lg:mt-[52px] mt-[10px]">
                <div className="flex gap-2">
                  {skill.map((sk) => (
                    <div key={sk._id} className="">
                      <div className="">
                        <p className="text-[#00A0DC] lg:text-[16px] text-[14px] font-medium">
                          {sk.skill}
                        </p>
                      </div>
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
  );
};

export default Singlecandidate;
