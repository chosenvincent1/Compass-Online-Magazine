import { useEffect, useState } from "react";
import FirstSection from "../components/TechnologyComponent/FirstSection/FirstSection";
import News from "../components/TechnologyComponent/News";
import NewsLetterComponent from "../components/HomeComponent/NewsLetterComponent";
import axios from "axios";

export default function Health(){
    const [health, setHealth] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const getHealthNews = async ()=> {
            try {
                const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/health.json?api-key=aslDGOntLrjgiHi0raSPx9pDCMMiP8Uy');
    
                if(response.status == 200){
                    setHealth(response.data.results);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getHealthNews()
    }, []);

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <>
            <FirstSection />
            <News news={health} />
            <NewsLetterComponent />
        </>
    )
}