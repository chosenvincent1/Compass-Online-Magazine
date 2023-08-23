
export default function NewsDescription({firstItem, section}){
    return (
        <div className="w-[600px] mb-[60px] ">
            <h2 className="text-[14px] uppercase font-[500] text-[#1049CC] mb-[27px] ">{section}</h2>

            <h2 className="text-[24px] text-[#171A22] font-[400] font-Chonburi mb-[26px] ">{firstItem.title}</h2>

            <p className="text-[18px] font-[400] text-[#5A6372] mb-[11px] ">{firstItem.abstract}</p>

            <a href="" className="uppercase text-[12px] font-[700] text-[#1049CC] ">Go to Headline</a>
        </div>
    )
}