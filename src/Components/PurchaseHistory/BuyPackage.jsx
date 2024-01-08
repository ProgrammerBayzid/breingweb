import { Link } from "react-router-dom";
import taka from "../../../public/images/RI-icons/taka.png";
import clock from "../../../public/images/RI-icons/clock.png";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import SinglePackage from "./SinglePackage";

const BuyPackage = () => {
    const [message, setMessage] = useState("");
    const [packageData, setPackageData] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    console.log(packageData);

    useEffect(() => {
        const fetchData = (token) => {
            fetch(
                `https://rsapp.unbolt.co/package`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
                .then((res) => {
                    if (res.status === 401) {
                        console.log("error");
                    }
                    return res.json();
                })
                .then((data) => {
                    if (data) {
                        setPackageData(data);
                        data;
                    }
                })
                .catch((error) => {
                    console.error("Fetch error:", error);
                })
                .finally(() => {
                    setIsLoading(false);
                });

        };

        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            const token = storedToken.replace(/"/g, "");
            fetchData(token);

        } else {
            setIsLoading(false);
        }
    }, []);

    // const [packageDetails, setPackageDetails] = useState([]);

    // const buyPackage = (packageDetails) => {
    //     const storedToken = localStorage.getItem("token");
    //     const token = storedToken.replace(/"/g, "");
    //     const recruterID = localStorage.getItem("recruterID").replace(/"/g, "");
    //     if (!token && !recruterID) {
    //         setMessage("Authentication token missing.");
    //         return;
    //     }
    //     console.log(token, recruterID);
    //     var pack = {
    //         // transactionID: transactionID,
    //         recruiterid: recruterID,
    //         packageDetails: packageData,
    //         // packageid: packageData._id,
    //         // starddate: packageData.createdAt,
    //         // enddate: packageData.updatedAt,
    //         // expireAt: packageData.updatedAt
    // //         name: name,
    // //   suggestname: suggestname,
    // //   chat: chat,
    // //   amount: amount,
    // //   currency: currency,
    // //   duration_time: duration_time,
    //     };
    //     console.log(pack);

    //     const requestOptions = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${token}`,
    //         },
    //         body: JSON.stringify(pack),
    //     };

    //     fetch("https://rsapp.unbolt.co/packagebuy", requestOptions)
    //         .then((response) => {
    //             if (response.status === 200) {
    //                 return response.json(); 
    //             } else if (response.status === 401) {
    //                 throw new Error("Unauthorized: Token invalid or expired.");
    //             } else {
    //                 throw new Error("Failed to Buy Package.");
    //             }
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setMessage("Bought Package successfully.");
    //             console.log(message, "message")
    //         })
    //         .catch((error) => {
    //             console.error("Error:", error);
    //             setMessage("An error occurred while processing your request.");
    //         });
    // };

    if (isloading == true) {
        return <Spinner></Spinner>
    }

    return (
        <div className="font-inter bg-white md:bg-gray-100 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md md:w-[700px] md:h-[616px] mb-40">
                <p className="text-[#212427] text-[18px] font-semibold mb-6">
                    Choose Your Package
                </p>
                {
                    packageData.map((packageData, i) =>
                        <SinglePackage
                            key={packageData._id}
                            i={i}
                            packageData={packageData}
                            // buyPackage={buyPackage}
                        ></SinglePackage>
                    )
                }

                {/* <p className="font-inter  mb-2 ps-2 font-medium text-[17px]">Startups Choice</p>
                <div className="font-inter border border-1 rounded-lg pt-2 mb-1 w-[405px] h-[104px] shadow-lg ps-2">
                    <div className="font-inter -ms-6">
                        <div className="font-inter ms-4">
                            <div className="font-inter flex gap-[180px]">
                                <p className="font-inter font-semibold text-[16px] ms-4">30 Chats Daily</p>
                                <div className="flex gap-1">
                                    <img className="w-[10px] h-[12px] mt-1 font-medium text-[16px]" src={taka} alt="" />
                                    <p>
                                        550
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-1 ms-4 mt-1">
                                <img className="w-[13px] h-[13px] mt-1" src={clock} alt="" />
                                <p className="font-normal text-[14px]">
                                    7 Days Validity
                                </p>
                            </div>
                            <div className="flex gap-[45px] mt-4">
                                <p className="ms-4 font-normal text-[12px] text-[#212427] text-opacity-60">
                                    Including SC, SD & VAT.
                                </p>
                                <button onClick={buyPackage} className="font-inter bg-[#10AC4B] w-[113px] h-[30px] rounded-2xl font-semibold text-[14px] ms-20 -mt-3 text-white cursor-pointer">Purchase Now</button>
                            </div>
                        </div>

                    </div>
                </div>
                <p className="font-inter mt-6 mb-2 pt-1 ps-2 font-medium text-[17px]">Recommended</p>
                <div className="font-inter border border-1 rounded-lg pt-2 mb-1 w-[405px] h-[104px] shadow-lg  ps-2">
                    <div className="font-inter -ms-6">
                        <div className="font-inter ms-4">
                            <div className="font-inter flex gap-[180px]">
                                <p className="font-inter font-semibold text-[16px] ms-4">50 Chats Daily</p>
                                <div className="flex gap-1">
                                    <img className="w-[10px] h-[12px] mt-1 font-medium text-[16px]" src={taka} alt="" />
                                    <p>
                                        1500
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-1 ms-4 mt-1">
                                <img className="w-[13px] h-[13px] mt-1" src={clock} alt="" />
                                <p className="font-normal text-[14px]">
                                    15 Days Validity
                                </p>
                            </div>
                            <div className="flex gap-[45px] mt-4">
                                <p className="ms-4 font-normal text-[12px] text-[#212427] text-opacity-60">
                                    Including SC, SD & VAT.
                                </p>
                                <button className="font-inter bg-[#10AC4B] w-[113px] h-[30px] rounded-2xl font-semibold text-[14px] ms-20 -mt-3 text-white cursor-pointer">Purchase Now</button>
                            </div>
                        </div>

                    </div>
                </div>
                <p className="font-inter mt-6 mb-2 pt-1 ps-2 font-medium text-[17px]">Best Deal</p>
                <div className="font-inter border border-1 rounded-xl pt-2 mb-1 w-[405px] h-[104px] shadow-lg ps-2">
                    <div className="font-inter -ms-6 ">
                        <div className="font-inter ms-4">
                            <div className="font-inter flex gap-[180px]">
                                <p className="font-inter font-semibold text-[16px] ms-4">100 Chats Daily</p>
                                <div className="flex gap-1">
                                    <img className="w-[10px] h-[12px] mt-1 font-medium text-[16px]" src={taka} alt="" />
                                    <p>
                                        4500
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-1 ms-4 mt-1">
                                <img className="w-[13px] h-[13px] mt-1" src={clock} alt="" />
                                <p className="font-normal text-[14px]">
                                    30 Days Validity
                                </p>
                            </div>
                            <div className="flex gap-[45px] mt-4">
                                <p className="ms-4 font-normal text-[12px] text-[#212427] text-opacity-60">
                                    Including SC, SD & VAT.
                                </p>
                                {/* <button  className="font-inter bg-[#10AC4B] w-[113px] h-[30px] rounded-2xl font-semibold text-[14px] ms-20 -mt-3 text-white cursor-pointer">Purchase Now</button> */}
                {/* <button className="font-inter bg-[#0077B5] w-[113px] h-[30px] rounded-2xl font-semibold text-[14px] ms-20 -mt-3 text-white cursor-pointer">Purchased</button>
                            </div>
                        </div>

                    </div>
                </div> */}
                <p className="font-inter  mt-8 w-[640px] font-medium text-[14px]">Please read our
                    <Link to="/dashboard/recruiter/purchase/privacy">
                        <span className="font-inter text-[#0077B5] text-opacity-90"> Privacy Policy </span>
                    </Link>
                    and
                    <Link to="/dashboard/recruiter/purchase/terms">
                        <span className="font-inter text-[#0077B5] text-opacity-90"> Terms & Conditions </span>
                    </Link>
                    before purchase a package.</p>
            </div>
        </div>
    );
};

export default BuyPackage;