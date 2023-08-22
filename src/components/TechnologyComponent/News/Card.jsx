
export default function Card(props){
    return (
        <section className="flex gap-[20px] mb-[30px] text-elipsis font-Montserrat  w-[530px] h-[100px] ">

            <div className="w-[100px] h-[100px] bg-[#D2D8E1]  ">
                {/* <img src="" alt="" /> */}
            </div>

            <div>
                <div className="flex gap-[50px] text-[11px] text-[#5A6372] font-[400] mb-[10px]  ">
                    <p>{props.published_date}</p>
                    <p>{props.byline}</p>
                </div>

                <h2 className="text-[#171A22] text-[18px] font-[400] font-Chonburi mb-[10px] ">{props.title}</h2>

                <p className="text-[13px] font-[400] ">{props.abstract}</p>
            </div>
        </section>
    )
}