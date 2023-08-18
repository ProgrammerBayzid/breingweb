import { Link } from "react-router-dom";

const EnterpriseHiring = () => {
  return (
    <div>
      <div>
        <div className=" lg:mx-[40px] md:mx-[10px] mx-[10px] lg:mt-[100px] md:mt-[80px] mt-[50px]">
          <div>
            <p className="text-center lg:text-[38px]  md:text-[32px] text-[22px] font-bold text-[#023C5B] mb-[30px]">
            What our “Enterprise Hiring” offer?
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              <div className="w-[320px] h-[298px]  ">
                <div>
                  <div className="	">
                    <img className=" " src="/images/eho1.png" />
                  </div>
                </div>
              </div>
              <div className="w-[320px] h-[298px]  ">
                <div>
                  <div className="	">
                    <img className=" " src="/images/eho2.png" />
                  </div>
                </div>
              </div>
              <div className="w-[320px] h-[298px]  ">
                <div>
                  <div className="	">
                    <img className=" " src="/images/eho3.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/recruiterslogin">


            <div className="flex justify-center mt-[30px]">
                <button className="text-[23px] font-bold w-[220px] h-[60px] border border-[2px] borded-[#0077B5] text-[#0077B5] hover:text-white hover:bg-[#0077B5] rounded rounded-[5px] ">
                Join Now
                </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseHiring;
