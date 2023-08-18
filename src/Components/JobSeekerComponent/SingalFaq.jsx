import { Collapse } from 'react-collapse';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'


const SingalFaq = ({key, open, title, des, toggle}) => {
    return (
        <div className='lg:w-[980px] mx-auto border-b-[1px] border-[#BCBDBE]  mb-3  rounded  pr-4'>
            <div 
            className="bg-white  py-[15px] pr-[20px] flex gap-5 items-center cursor-pointer  "

            onClick={toggle}
            >

                <div className="lg:text-[22px] md:text-[20px] text-[18px] text-[#0077B5]">
                    {open ? <AiOutlineMinus/> : <AiOutlinePlus/>  }
                </div>
                <div>
                    <p className='lg:text-[22px] md:text-[20px] text-[18px] text-[#373A3D] font-medium'>{title}</p>
                </div>

            </div>
        <div className='    rounded rounded-lg'>
        <Collapse isOpened={open}>
          <p className='lg:text-[18px] text-[14px] md:text-[16px] pb-5 text-[#646668]'>{des}</p>

          </Collapse>
        </div>
        </div>
    );
};

export default SingalFaq;