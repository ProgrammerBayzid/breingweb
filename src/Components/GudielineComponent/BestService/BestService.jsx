import f from '../../../assets/guidline/Search_light.svg'
import i from '../../../assets/guidline/Video_light.svg'
import s from '../../../assets/guidline/Pin_light.svg'
import n from '../../../assets/guidline/Bell_light.svg'
import g from '../../../assets/guidline/Chield_check_fill.svg'
import h from '../../../assets/guidline/happy_light.svg'


const BestService = () => {
  return (
    <div className="flex justify-center">
      <div>

    <div className="  mt-20 ">
      <div>
        <h1 className="mx-auto text-[40px] font-medium  text-center mb-10">
          Forget the Traditional Hiring & Get the Instant Service via Bringin{" "}
        </h1>
      </div>
      <div className="0">

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10  ">
       <div className="h-[200px] border-[#00A0DC] border-b-[3px]">
       <div className="lg:w-[405px] md:w-[405px] w-full h-[200px] border ">
          <div className="flex gap-2 px-10 mt-12">
            <div className="">
              <img src={f} className="w-[100px] rounded-lg " />
            </div>
            <div>
              <h1 className="text-[24px] font-semibold">Find AI Matching Jobs</h1>
              <p className='text-[#646668]'>
                Bringin provide you the AI Matching Recommended Jobs based on
                your preferences.{" "}
              </p>
            </div>
          </div>
        </div>
       </div>
       <div className="h-[200px] border-[#00A0DC] border-b-[3px]">



        <div className="lg:w-[405px] md:w-[405px] w-full h-[200px] border ">
          <div className="flex gap-2 px-10 mt-12">
            <div className="">
              <img src={i} className="w-[100px] rounded-lg " />
            </div>
            <div>
              <h1 className="text-[24px] font-semibold">Interview from Home</h1>
              <p className='text-[#646668]'>
                Attend video interview from home that saves lots of your energy,
                time and money.
              </p>
            </div>
          </div>
        </div>
       </div>
       <div className="h-[200px] border-[#00A0DC] border-b-[3px]">



        <div className="lg:w-[405px] md:w-[405px] w-full h-[200px] border border-color-[#000000]">
          <div className="flex gap-2 px-10 mt-12">
            <div className="">
              <img src={s} className="w-[120px] rounded-lg " />
            </div>
            <div>
              <h1 className="text-[24px] font-semibold">Search by Location</h1>
              <p className='text-[#646668]'>
                Search for jobs in whatever region you pick. It assists you in
                locating a job nearby.
              </p>
            </div>
          </div>
        </div>
       </div>
       <div className="h-[200px] border-[#00A0DC] border-b-[3px]">



        <div className="lg:w-[405px] md:w-[405px] w-full h-[200px] border border-color-[#000000]">
          <div className="flex gap-2 px-10 mt-12">
            <div className="">
              <img src={n} className="w-[100px] rounded-lg " />
            </div>
            <div>
              <h1 className="text-[24px] font-semibold">New Job Notifications</h1>
              <p className='text-[#646668]'>
                Bringin will notify you about the latest jobs that makes your
                job hunting easier.
              </p>
            </div>
          </div>
        </div>
       </div>
       <div className="h-[200px] border-[#00A0DC] border-b-[3px]">


        <div className="lg:w-[405px] md:w-[405px] w-full h-[200px] border border-color-[#000000]">
          <div className="flex gap-2 px-10 mt-12">
            <div className="mt-[6px]">
              <img
                src={g}
                className="w-[70px] rounded-lg "
              />
            </div>
            <div>
              <h1 className="text-[24px] font-semibold">Job Security</h1>
              <p className='text-[#646668]'>
                All recruiters of bringin is 100% verified, there is chance to
                be spammed or scammed.
              </p>
            </div>
          </div>
        </div>
       </div>
       <div className="h-[200px] border-[#00A0DC] border-b-[3px]">


        <div className="lg:w-[405px] md:w-[405px] w-full h-[200px] border border-color-[#000000]">
          <div className="flex gap-2 px-10 mt-12">
            <div className="">
              <img src={h} className="w-[80px] rounded-lg " />
            </div>
            <div>
              <h1 className="text-[24px] font-semibold">Happy Support</h1>
              <p className='text-[#646668]'>
                We are always ready to help in any bringin app related issues
                over whatsapp.
              </p>
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
};

export default BestService;
