import { useEffect, useState } from "react";
import FirstSection from "../components/TechnologyComponent/FirstSection/FirstSection";
import News from "../components/TechnologyComponent/News";
import NewsLetterComponent from "../components/HomeComponent/NewsLetterComponent";
import axios from "axios";
import { MoonLoader } from "react-spinners";

export default function Business(){
    const [business, setBusiness] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const getHomeNews = async ()=> {
            try {
                const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/business.json?api-key=aslDGOntLrjgiHi0raSPx9pDCMMiP8Uy');
    
                if(response.status === 200){
                    setBusiness(response.data);
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
            {isLoading ? 
            <div className="py-[50px] text-center flex justify-center ">
                <MoonLoader color="#000" loading={true} size={50} />
            </div> : 
            <FirstSection image={business.results[0]}  />
            }
            {isLoading ? 
            <div className="py-[50px] text-center flex justify-center ">
                <MoonLoader color="#000" loading={true} size={50} />
            </div> : 
            <News news={business} />
            }

            <NewsLetterComponent />
        </>
    )
}