import { FaTelegram } from 'react-icons/fa';
export default function NewsLetterComponent(){
    return (
        <section className="w-full flex gap-[51px] h-[440px] bg-[#ccc] py-[77px] px-[135px] ">
        <div style={{
            backgroundImage: 'url(../images/news-bg-5.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} className="h-[180px] w-[180px] flex items-center justify-center font-Montserrat ">
            <p className="text-[100px] font-Chonburi font-[400] ">@</p>
        </div>

        <div className="w-[623px] ">
            <h2 className="text-[24px] text-[#171A22] font-Chonburi font-[400] mb-[19px] ">Subscribe to INFORMAT Email Briefings</h2>

            <p className="text-[18px] font-[400] font-Montserrat mb-[44px] ">Sign up for our daily newsletter and get the best of The INFORMAT in your in-box.</p>

            <input type="text" placeholder="Your email" className="border-b-[2px] border-b-[#5A6372] w-[276px] mb-[22px] bg-transparent pb-[10px] outline-0 text-[#5A6372] placeholder-[#5A6372] text-[16px] " />

            <div className='flex gap-[17px] items-center '>
                <FaTelegram className='text-[#806799] h-[36px] w-[36px] ' />
                <button className='text-[12px] font-[700] text-[#806799] uppercase '>Subscribe</button>
            </div>
        </div>
        </section>
    )
}