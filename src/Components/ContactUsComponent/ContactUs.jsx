 
const ContactUs = () => {
  useTitle('Contact-us - Bringin')

  return (
    <div>
      <div className="my-10">
        <div className=" lg:h-[446px] md:h-[446px] bg-[#F6F6F6] py-[50px]">
       <div className="">
       <div className="lg:flex md:flex justify-center gap-20 items-center">
            <div className="lg:w-[634px] md:w-[634px] w-full h-[346px] bg-[#D9D9D9]"></div>
            <div>
              <div className="flex pb-10 border-b-2 items-center gap-3">
                <div>
                  <img ={40} height={40} alt=""  src="Group 11928.svg" className="w-[40px] h-auto"/>
                </div>
                <div>
                  <p className="text-[18px] mb-2">Our Office Address</p>
                  <p className="text-[18px] font-medium">Sector 10. Road 04, House 25 Uttara, Dhaka</p>
                </div>
              </div>
              <div className="flex py-7 border-b-2 items-center gap-3">
                <div>
                  <img ={40} height={40}  src="Group 11929.svg" className="w-[40px] h-auto"/>
                </div>
                <div>
                  <p className="text-[18px] mb-2">Our Phone Number</p>
                  <p className="text-[18px] font-medium">+88 01756 17 51 41</p>
                </div>
              </div>
              <div className="flex py-7 border-b-2 items-center gap-5">
                <div>
                  <img ={40} height={40}  src="Group 11930.svg" className="w-[40px] h-auto"/>
                </div>
                <div>
                  <p className="text-[18px] mb-2">Our Email</p>
                  <p className="text-[18px] font-medium">hello@bringin.io</p>
                </div>
              </div>
            </div>
          </div>
       </div>
        </div>
        <div className="flex justify-center my-10">
<div>
<img src="map.png"/>

</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
