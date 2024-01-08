import aa from "../../../public/images/RI-icons/selected-message.png";
import aaa from "../../../public/images/RI-icons/double-bullet.png";
import { useEffect, useState } from "react";
import useAuth from "../RecruterPrivetRoute/Context/useAuth";

const WelcomeMessage = () => {


    const recruter = useAuth();
    const recruterDetails = recruter.recruter;

    console.log(recruter)
    const [selectedMessage, setSelectedMessage] = useState(null);




    const handleMessageSelect = (messageIndex) => {
        if (selectedMessage === messageIndex) {
            setSelectedMessage(null); // Deselect the message if it's already selected
        } else {
            setSelectedMessage(messageIndex);
        }
    };

    const messageList = [
        {
            text: `Hello ${recruterDetails?.firstname} ${recruterDetails?.lastname}, I am interested in your profile, Let’s talk in details about the job post.`,
        },
        {
            text: `Hey ${recruterDetails?.firstname} ${recruterDetails?.lastname}, You have a good profile. Can I know your skills, qualifications & experiences in depth?`,
        },
        {
            text: `Hello ${recruterDetails?.firstname} ${recruterDetails?.lastname}, Are you available to response? I'd love to chat with you about our current job openings.`,
        },
        {
            text: `Greetings ${recruterDetails?.firstname} ${recruterDetails?.lastname}, I am interested in your profile, can we have a talk? Please feel free to knock me back asap!`,
        },
        {
            text: `Hi ${recruterDetails?.firstname} ${recruterDetails?.lastname}, I have read your bio. Would you please share me your details CV to learn more about your education & experiences?`,
        },
        {
            text: `Hi, Upon reviewing your profile, Found you matched according to our requirements. Are you available for a quick chat now?`,
        },
        {
            text: `Hello, I am interested in your profile. Would you please send me your resume or more details about yourself?`,
        },
        {
            text: `Hello ${recruterDetails?.firstname} ${recruterDetails?.lastname}, I would like to have a meeting with you to talk about the job post. Could we schedule a time that works for both of us?`,
        }
    ];

    return (
        <div className="font-inter bg-white mx-auto rounded-lg w-[360px] h-[800px] md:w-[700px] md:h-[951px] text-[#212427] ms-[4px]">
            <div className="font-inter md:w-[700px] mx-auto">
                <p className="font-inter pt-8 pb-3 font-semibold text-2xl text-center">Welcome Message</p>
                <p className="font-inter px-28 pb-6 text-center">Choose a message to send automatically to the candidate when opening the chat.</p>
                <div className="font-inter w-[634px] h-[463px] ms-8 text-[#212427] text-opacity-90">
                    {messageList.map((message, index) => (
                        <div className="font-inter ms-[38px] mt-4 inline-flex gap-3" key={index}>
                            <img
                                className="cursor-pointer font-inter mt-2 -ms-[36px] w-[18px] h-[18px]"
                                src={
                                    selectedMessage === index ? aa : aaa}
                                alt=""
                                onClick={() => handleMessageSelect(index)}
                            />
                            <p className="w-[604px] h-[38px">{message.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default WelcomeMessage;