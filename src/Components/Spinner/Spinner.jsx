import { FadeLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="pt-[200px] mb-[300px] ">
      <div role="status"  className="flex  justify-center items-center  ">
        <FadeLoader
         
          color="#0077B5"
        />
      </div>
    </div>
  );
};

export default Spinner;
