import NewsHeadline from "./NewsHeadline";
import RightSection from "../RightSection";
import { MoonLoader } from 'react-spinners';

export default function NewsSection({food, travel, technology, business, isLoading}){
    if(isLoading) {
        return (
            <div className="py-[50px] text-center flex justify-center ">
                <MoonLoader color="#000" loading={true} size={50} />
            </div>
        )
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