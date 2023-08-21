import NewsHeadline from "./NewsHeadline";
import RightSection from "../RightSection";

export default function NewsSection(props){
    console.log(props.home)
    return(
        <section className="py-[77px] px-[135px] bg-[#fff] flex gap-[39px] ">
            <div>
                <NewsHeadline />
                <NewsHeadline />
                <NewsHeadline />
            </div>
            <RightSection />
        </section>
    )
}