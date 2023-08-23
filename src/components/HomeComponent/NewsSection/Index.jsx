import NewsHeadline from "./NewsHeadline";
import RightSection from "../RightSection";

export default function NewsSection({food, technology, isLoading}){
    if(isLoading) {
        return <div>Loading...</div>
    }
    return(
        <section className="py-[77px] px-[135px] bg-[#fff] flex gap-[39px] ">
            <div>
                <NewsHeadline food={food} technology={technology} />
            </div>
            <RightSection />
        </section>
    )
}