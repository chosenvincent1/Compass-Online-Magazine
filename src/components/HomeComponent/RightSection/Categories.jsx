import { Link } from "react-router-dom"

export default function Categories(){
    return (
        <section className="font-Montserrat mb-[110px]">
            <div className="border-b-[1px] border-b-[#D2D8E1] pb-[18px] w-[180px] uppercase text-[16px] font-[700] mb-[20px] ">
                <h2>Top Categories</h2>
            </div>

            <div className="uppercase flex flex-col gap-[20px] ">
                <Link to="/technology">Technology</Link>
                <Link to="/business">Business</Link>
                <Link to="/travel">Travel</Link>
                <Link to="/food">Food</Link>
                <Link to="/world">World</Link>
            </div>
        </section>
    )
}