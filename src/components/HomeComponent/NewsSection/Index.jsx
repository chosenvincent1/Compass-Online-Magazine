import NewsHeadline from "./NewsHeadline";
import RightSection from "../RightSection";

export default function NewsSection({world, business, technology}){

    return(
        <section className="py-[77px] px-[135px] bg-[#fff] flex gap-[39px] ">
            <div>
                <NewsHeadline world={world} business={business} technology={technology} />
            </div>
            <RightSection />
        </section>
    )
}