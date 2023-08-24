import { useEffect, useState } from "react";
import FirstSection from "../components/TechnologyComponent/FirstSection/FirstSection";
import News from "../components/TechnologyComponent/News";
import NewsLetterComponent from "../components/HomeComponent/NewsLetterComponent";
import axios from "axios";
import { MoonLoader } from 'react-spinners';

export default function Science(){
    const [science, setScience] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const getScienceNews = async ()=> {
            try {
                const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=aslDGOntLrjgiHi0raSPx9pDCMMiP8Uy');
    
                if(response.status === 200){
                    setScience(response.data);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getScienceNews();
    }, []);

    return (
        <>
            {isLoading ? 
                <div className="py-[50px] text-center flex justify-center ">
                    <MoonLoader color="#000" loading={true} size={50} />
                </div> : 
                <FirstSection image={science.results[0]}  />
            }
            {isLoading ? 
                <div className="py-[50px] text-center flex justify-center ">
                    <MoonLoader color="#000" loading={true} size={50} />
                </div> : 
                <News news={science} />
            }
            <NewsLetterComponent />
        </>
    )
}