import { useEffect, useState} from 'react';
import NewsHeadline from "./NewsHeadline";
import RightSection from "../RightSection";
import axios from 'axios';

export default function NewsSection({home, isLoading}){
    if(isLoading) {
        return <h1>Loading...</h1>
    }
    // console.log(home)

    return(
        <section className="py-[77px] px-[135px] bg-[#fff] flex gap-[39px] ">
            <div>
                {home.map(item=> {
                    if(item.section === 'business'){
                        return <NewsHeadline home={home} section={item.section} abstract={item.abstract} title={item.title} />
                    }

                    if(item.section === 'science'){
                        return <NewsHeadline byline={item.byline} published_date={item.published_date} section={item.section} abstract={item.abstract} title={item.title} />
                    }
                })}
            </div>
            <RightSection />
        </section>
    )
}