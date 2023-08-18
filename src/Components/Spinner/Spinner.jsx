import { FadeLoader } from 'react-spinners';

const Spinner = () => {
    return (
       <div className='mt-[150px] mb-[300px]'>
         <div role="status" className='flex mx-auto justify-center items-center'>
         <FadeLoader color="#0077B5" />
        </div>
       </div>
    );
};

export default Spinner;