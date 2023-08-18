import { FaSearch } from 'react-icons/fa';
export default function LandingPage(){
    return(
        <section 
            style={{
                backgroundImage: 'url(../images/landing-page-image.png)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }} className="h-[559px] w-full py-[20px] font-Montserrat flex flex-col justify-center pl-[154px] ">
            
            <div className="w-[700px] flex items-end gap-[12px] text-[#FFFFFF]">
                <input type="text" placeholder="Search" className="border-b-[#FFFFFF] border-b-[2px] w-[100%] bg-transparent outline-0 text-[30px] font-[500] placeholder-[#fff] " />

                <FaSearch className='w-[38.974px] h-[41.019px] cursor-pointer '/>
            </div>
        </section>
    )
}