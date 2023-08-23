import { useEffect, useState} from 'react';
import Headline from './Headline';
import RightSection from '../../HomeComponent/RightSection';

export default function News({news}){
    return(
        <section className="py-[77px] px-[135px] bg-[#fff] flex gap-[39px] ">
            <div>
                <Headline news={news} />
            </div>
            <RightSection />
        </section>
    )
}