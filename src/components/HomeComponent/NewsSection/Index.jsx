import NewsHeadline from "./NewsHeadline";
import RightSection from "../RightSection";

export default function NewsSection(props){
    return(
        <section className="py-[77px] px-[135px] bg-[#fff] flex gap-[39px] ">
            <div>
                <NewsHeadline food={props.food} technology={props.technology} />
            </div>
            <RightSection />
        </section>
    )
}