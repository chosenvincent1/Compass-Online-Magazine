import { useEffect, useState } from "react";
import FirstSection from "../components/TechnologyComponent/FirstSection/FirstSection";
import News from "../components/TechnologyComponent/News";
import NewsLetterComponent from "../components/HomeComponent/NewsLetterComponent";
import axios from "axios";

export default function Travel(){
    const [travel, setTravel] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const getHomeNews = async ()=> {
            try {
                const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=aslDGOntLrjgiHi0raSPx9pDCMMiP8Uy');
    
                console.log(response.data.results);
                if(response.status == 200){
                    setTravel(response.data.results);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getHomeNews()
    }, []);

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <>
            <FirstSection />
            <News technology={travel} />
            <NewsLetterComponent />
        </>
    )
}