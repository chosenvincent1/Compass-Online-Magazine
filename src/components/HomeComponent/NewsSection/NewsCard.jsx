
export default function NewsCard(){
    return (
        <section className="flex gap-[20px] font-Montserrat w-[650px] h-[100px] ">
            <div className="w-[100px] h-[100px] bg-[#D2D8E1] ">
                {/* <img src="" alt="" /> */}
            </div>

            <div>
                <div className="flex gap-[50px] text-[11px] text-[#5A6372] font-[400] mb-[10px]  ">
                    <p>Posted July 11, 2017</p>
                    <p>By Arthur Black</p>
                </div>

                <h2 className="text-[#171A22] text-[18px] font-[400] font-Chonburi mb-[10px] ">Which Flavor of Data Professional Are You?</h2>

                <p className="text-[13px] font-[400] ">As software engineers, developers or architects, it is pivotal to stay current and relevant within the technologies and the domains we work...</p>
            </div>
        </section>
    )
}