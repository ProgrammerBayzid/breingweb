import { Collapse } from 'react-collapse';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'


const SingalFaq = ({key, open, title, des, toggle}) => {
    return (
        <div className='lg:w-[980px] mx-auto shadow-sm mb-3  rounded rounded-xl px-4'>
            <div 
            className="bg-white shadow-md py-[15px] px-[20px] flex gap-5 items-center cursor-pointer rounded-box "

            onClick={toggle}
            >

                <div className="lg:text-[30px] md:text-[25px] text-[22px] text-[#0077B5]">
                    {open ? <AiOutlineMinus/> : <AiOutlinePlus/>  }
                </div>
                <div>
                    <p className='lg:text-[25px] md:text-[24px] text-[20px] font-medium'>{title}</p>
                </div>

            </div>
        <div className='  px-[50px]  rounded rounded-lg'>
        <Collapse isOpened={open}>
          <p className='lg:text-[23px] text-[20px] md:text-[18px] py-5 '>{des}</p>

          </Collapse>
        </div>
        </div>
    );
};

export default SingalFaq;