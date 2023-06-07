import s from '../../../assets/enterprices/2380a23a-8df8-46dc-b60c-05736464af0b.svg'
const Stay = () => {
  return (
    <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-20">
      <div className="flex justify-center">

      <div className=" grid lg:grid-cols-2  gap-5 ">
        <div className="">
          <img
          
           
           alt=""
            src={s}
            className="lg:w-[547px] md:w-[750px] rounded-lg shadow-2xl ml-5"
          />
        </div>
        <div className="mt-10 lg:text-start md:text-center text-center">
          <h1 className="lg:text-[42px] md:text-[35px] text-[30px]  font-semibold">Your one-stop solution for instant hiring Needs with  <span className="text-[#0077B5]">Bringin</span></h1>
          <h1 className="text-[30px] mt-12 font-medium">
          Find the Right People and Hire Instantly.
          </h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Stay;
