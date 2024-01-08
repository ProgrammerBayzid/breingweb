import { useEffect } from "react";
import { useSocket } from "../SocketContext/SocketContext";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../RecruterPrivetRoute/Context/useAuth";
import ChatSetting from "./ChatSetting";
import { FaVideo } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";

const RecruterChatwork = () => {
  const { id } = useParams();
  console.log(id);
  const ChannelID = id;
  const socket = useSocket();
  const recruter = useAuth();
  const recruterDetails = recruter.recruter;
  const dynamicUserId = recruterDetails?._id;
  console.log(dynamicUserId);

  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  console.log(chatMessages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (socket) {
      socket.emit("singlemsg", ChannelID);
      socket.on("connect", () => {
        console.log(`Socket connected to channel ${ChannelID}`);
      });
    }

    return () => {
      if (socket) {
        socket.off("singlemsg");
      }
    };
  }, [socket, ChannelID]);

  const handleMessageSend = () => {
    const messagePayload = {
      channelid: ChannelID,
      message: {
        user: dynamicUserId,
        text: message,
        medias: null,
        quickReplies: null,
        customProperties: {
          type: 0,
          seen: false,
          reaply: false,
          reaplymsg: null,
          messageid: "",
          request: 0,
        },
        mentions: null,
        status: "none",
        replyTo: null,
      },
    };
    console.log(messagePayload);

    socket.emit("message", messagePayload, (response) => {
      console.log("Server response:", response);
    });

    setMessage("");
  };

  const [singelChannelData, setsingelChannelData] = useState({});
  console.log(singelChannelData);

  useEffect(() => {
    const fetchRecruiterchatHistory = (token) => {
      fetch(
        `https://rsapp.unbolt.co/single_channelinfo?channelid=${ChannelID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401) {
            // console.log("error");
          }
          return res.json();
        })
        .then((data) => {
          if (data) {
            setsingelChannelData(data);
            data;
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        })
        .finally(() => {
          // setIsLoading(false); // Mark the loading as complete
        });
    };

    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const stringWithoutQuotes = storedToken.replace(/"/g, "");
      fetchRecruiterchatHistory(stringWithoutQuotes);
    } else {
      // setIsLoading(false);
    }
  }, [ChannelID]);
  const lastIndex =
    singelChannelData?.candidate_fullprofile?.workexperience.length - 1;

  // Access the last element using the lastIndex
  const lastElement =
    singelChannelData?.candidate_fullprofile?.workexperience[lastIndex];

  const [otherInformetion, setotherInformetion] = useState(false);

  const handelOtherInformetion = () => {
    setotherInformetion(!otherInformetion);
  };

  return (
    <div>
      <div className="flex gap-[30px] w-full">
        <div className="bg-white h-[555px] w-[640px]  rounded rounded-b-[10px]">
          <div className="h-[70px] bg-[#FCFCFC] px-[20px] py-[10px]">
            <div className="flex justify-between items-center">
              <div className="flex ">
                <div>
                  <img
                    src={`https://rsapp.unbolt.co/${singelChannelData?.candidate_fullprofile?.userid?.image}`}
                    className="w-[55px] h-[55px] rounded rounded-full"
                  />
                </div>
                <div>
                  {singelChannelData?.candidate_fullprofile?.userid
                    ?.fastname ? (
                    <p className="font-inter inline-flex gap-2 text-[17px] text-[#212427]  font-semibold ms-3 ">
                      {
                        singelChannelData?.candidate_fullprofile?.userid
                          ?.fastname
                      }{" "}
                      {
                        singelChannelData?.candidate_fullprofile?.userid
                          ?.lastname
                      }
                      {/* <li className="font-inter ms-2 text-[#00A0DC] font-normal">
                  {singelChannelData?.candidate_fullprofile?.userid?.other?.online === true ? "Online" : "Ofline"}
                </li> */}
                    </p>
                  ) : (
                    ""
                  )}

                  <p className="font-inter font-normal ms-3 text-[14px] text-[#212427] text-opacity-90 mt-[2px]">
                    {" "}
                    {lastElement?.designation && lastElement?.companyname
                      ? `${lastElement.designation} `
                      : ""}
                  </p>
                </div>
              </div>
              <div>
                <FaVideo className="text-[#0077B5] w-[30px] h-[20px]" />
              </div>
            </div>
          </div>
          <div className="h-[443px] bg-blue-500 overflow-y-auto px-[20px] py-[10px]">
            <div></div>
            <div className=" absolute z-40 mt-[120px]">
              {otherInformetion && (
                <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded w-[161px] h-[300px] pb-3 pt-2  overflow-auto"></div>
              )}
            </div>
          </div>
          <div className="h-[40px] px-[20px] py-[10px] bg-[#FCFCFC] flex justify-between items-center">
            <div className="flex gap-[20px]">
              <div>
                {" "}
                <img
                  src="/images/massage/massage3dot.svg"
                  onClick={handelOtherInformetion}
                  className="w-[5px] h-[20px] rounded rounded-full cursor-pointer"
                />
              </div>
              <div>
                <img
                  src="/images/massage/gallery.svg"
                  className="w-[20px] h-[20px] cursor-pointer"
                />
              </div>
            </div>
            <div>
              <div className="h-[36px] w-[476px] border border-[#8E8E93] border-[1px] rounded-[25px] flex justify-between items-center px-2">
                <div>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="h-[34px] rounded-[20px] w-[430px] outline-none bg-[#FCFCFC] pl-2"
                  />
                </div>
                <div>
                  <img
                    src="/images/massage/emoj.svg"
                    className="w-[20px] h-[20px] rounded rounded-full cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  onClick={handleMessageSend}
                  src="/images/massage/sendMassagebtn.svg"
                  className="w-[33px] h-[33px] rounded rounded-full cursor-pointer"
                />
              </div>
              <EmojiPicker />
            </div>
          </div>
        </div>
        <ChatSetting></ChatSetting>
      </div>
    </div>
  );
};

export default RecruterChatwork;
