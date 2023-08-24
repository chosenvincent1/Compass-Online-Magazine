import { useEffect, useState } from "react";
import FirstSection from "../components/TechnologyComponent/FirstSection/FirstSection";
import News from "../components/TechnologyComponent/News";
import NewsLetterComponent from "../components/HomeComponent/NewsLetterComponent";
import axios from "axios";

export default function Fashion(){
    const [fashion, setFashion] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const getHomeNews = async ()=> {
            try {
                const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=aslDGOntLrjgiHi0raSPx9pDCMMiP8Uy');
    
                if(response.status === 200){
                    setFashion(response.data);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getHomeNews()
    }, []);

    return (
        <>
            {isLoading ? <div className="py-[50px] text-center font-[700] text-[50px] ">Loading...</div> : <FirstSection image={fashion.results[0]}  />}
            {isLoading ? <div className="py-[50px] text-center font-[700] text-[50px] ">Loading...</div> : <News news={fashion} />}
            
            <NewsLetterComponent />
        </>
    )
}