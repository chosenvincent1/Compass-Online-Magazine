
export default function NewsCard({image, title, abstract, byline, date, url}){
    const publishDate = new Date(date);
    const year = publishDate.getFullYear();
    const month = publishDate.toLocaleDateString('default', {month: 'long'});
    const day = publishDate.getDay()
    const formattedDate = `${month} ${day}, ${year}`

    return (
        <>
            <a href={`${url}`} className="cursor-pointer">
                <section className="flex gap-[20px] mb-[30px] font-Montserrat w-[650px] ">
                    <div className="w-full max-w-[100px] h-[100px] bg-[#D2D8E1] ">
                        <img src={image.url} alt={image.caption} className="h-[100%] w-[100%]" />
                    </div>

                    <div>
                        <div className="flex gap-[50px] text-[11px] text-[#5A6372] font-[400] mb-[10px]  ">
                            <p>{formattedDate}</p>
                            <p>{byline}</p>
                        </div>

                        <h2 className="text-[#171A22] text-[18px] font-[400] font-Chonburi mb-[10px] ">{title}</h2>

                        <p className="text-[13px] font-[400] ">{abstract}</p>
                    </div>
                </section>
            </a>
        </>
    )
}