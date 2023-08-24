import { FaSearch } from 'react-icons/fa';
export default function FirstSection({image}){
    const imageUrl = image.multimedia ? image.multimedia[0].url : '';
    if(imageUrl === ''){
        return null
    }
    
    return(
        <section 
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageUrl})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }} className="h-[559px] w-full py-[20px] font-Montserrat flex flex-col justify-center pl-[154px] bg-opacity-100 ">
            
            <div className="w-[700px] flex items-end gap-[12px] text-[#FFFFFF]">
                <input type="text" placeholder="Search" className="border-b-[#FFFFFF] border-b-[2px] w-[100%] bg-transparent outline-0 text-[30px] font-[500] placeholder-[#fff] " />

                <FaSearch className='w-[38.974px] h-[41.019px] cursor-pointer '/>
            </div>
        </section>
    )
}