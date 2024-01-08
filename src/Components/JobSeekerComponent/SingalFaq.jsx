import { Collapse } from 'react-collapse';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'


const SingalFaq = ({key, open, title, des, toggle}) => {
    return (
        <div>
            <div 
            className="bg-white  py-[15px] pr-[20px] flex gap-5 items-center cursor-pointer  "

            onClick={toggle}
            >

                <div className="lg:text-[22px] md:text-[20px] text-[18px] text-[#0077B5]">
                    {open ? <AiOutlineMinus/> : <AiOutlinePlus/>  }
                </div>
                <div>
                    <p className='lg:text-[22px] md:text-[20px] text-[18px] text-[#212427] font-semibold'>{title}</p>
                </div>

            </div>
        <div className='    rounded rounded-lg'>
        <Collapse isOpened={open}>
          <p className='lg:text-[18px] text-[14px] md:text-[16px] pb-5 text-[#646668] lg:text-start md:text-start text-center'>{des}</p>

          </Collapse>
        </div>
        </div>
    );
};

export default SingalFaq;