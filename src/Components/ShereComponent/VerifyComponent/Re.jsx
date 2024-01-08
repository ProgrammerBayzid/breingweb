import { useEffect } from "react";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { useProfileData } from "../../ProfieComponent/ProfileDataProvider";

const Re = () => {

    const { profileData } = useProfileData();
    const token = localStorage.getItem("token")
    useEffect(() => {
        const checkTokenExpiry = () => {
          const decodedToken = jwt_decode(token);
          if (decodedToken.exp < Date.now() / 1000) {
            // Token has expired, handle token renewal here
            // You may need to re-authenticate and obtain a new token
            // Update the token state with the new token
            // setToken(newToken);
          }
        };
    
        checkTokenExpiry();
      }, [token]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const addRecruterData = (data, e) => {
    console.log(data);
    const recruterdata = {
      firstname: data.firstname,
      lastname: data.lastname,
      designation: data.designation,
      email: data.email,
      image: data.image,
      companyname: data.companyname,
    };
    console.log(recruterdata);

    fetch("https://rsapp.unbolt.co/recruiters_update", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(recruterdata),
    })
      .then((res) => res.json())
      .then((result) => {
        e.target.reset();
        console.log(result);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(addRecruterData)}>
        <div>
          <input
            placeholder="Fast name"
            type="text"
            {...register("firstname", {
              required: "  firstname is Required",
            })}
            className="focus:outline-none  input p-5 w-full mb-[15px] h-[45px] border border-[2px]"
          />
          {errors.firstname && (
            <p className="text-red-500">{errors.firstname}</p>
          )}
        </div>
        
        <div>
          <input
            placeholder="Last name"
            type="text"
            {...register("lastname", {
              required: " lastName is Required",
            })}
            className="focus:outline-none  input p-5 w-full mb-[15px] h-[45px] border border-[2px]"
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
        </div>
        <div>
          <input
            placeholder="Official email"
            type="text"
            {...register("email", {
              required: "  email is Required",
            })}
            className="focus:outline-none  input p-5 w-full mb-[15px] h-[45px] border border-[2px]"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <input
            placeholder="Company name"
            type="text"
            {...register("companyname", {
              required: "companyname is Required",
            })}
            className="focus:outline-none  input p-5 w-full mb-[15px] h-[45px] border border-[2px]"
          />
          {errors.companyname && (
            <p className="text-red-500">{errors.companyname}</p>
          )}
        </div>
        <div>
          <input
            placeholder=" Designation"
            type="text"
            {...register("designation", {
              required: "  designation is Required",
            })}
            className="focus:outline-none  input p-5 w-full mb-[15px] h-[45px] border border-[2px]"
          />
          {errors.designation && (
            <p className="text-red-500">{errors.designation}</p>
          )}
        </div>
        <div>
          <input
            placeholder=" Image"
            type="file"
            {...register("image", {
              required: "  image is Required",
            })}
            className="focus:outline-none  input p-5 w-full mb-[15px] h-[45px] border border-[2px]"
          />
          {errors.image && <p className="text-red-500">{errors.image}</p>}
        </div>

        <button
          type="submit"
          className="lg:w-[400px] md:w-[380px] w-[300px] h-[45px] bg-[#F2F2F2] text-[18px] font-semibold hover:bg-[#0077B5] hover:text-white rounded text-center pt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Re;
