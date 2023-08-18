import NewsHeadline from "./NewsHeadline";
import RightSection from "../RightSection";

export default function NewsSection(){
    return(
        <section className="py-[77px] px-[135px] bg-[#fff] flex gap-[39px] ">
            <NewsHeadline />
            <RightSection />
        </section>
    )
}