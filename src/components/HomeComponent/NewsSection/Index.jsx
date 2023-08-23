import NewsHeadline from "./NewsHeadline";
import RightSection from "../RightSection";

export default function NewsSection({food, travel, technology, business, isLoading}){
    if(isLoading) {
        return <div className="py-[50px] text-center text-[50px] font-[600]">Loading...</div>
    }
    return(
        <section className="py-[77px] px-[135px] bg-[#fff] flex gap-[39px] ">
            <div>
                <NewsHeadline travel={travel} food={food} business={business} technology={technology} />
            </div>
            <RightSection />
        </section>
    )
}