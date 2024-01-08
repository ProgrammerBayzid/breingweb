import job from "../../../public/images/RI-icons/no-jobs.png"

const NoJobPosts = () => {
    return (
        <div className="font-inter
        bg-white md:bg-gray-100 flex justify-center">
             <div className="font-inter
                        w-[700px] h-[445px] bg-white flex flex-col  justify-center items-center">
                            <img src={job} alt="" />
                            <p className="font-inter
                            mt-4">There are no job posts</p>
                        </div>
        </div>
    );
};

export default NoJobPosts;