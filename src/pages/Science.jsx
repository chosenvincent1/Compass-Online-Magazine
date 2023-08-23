import { useEffect, useState } from "react";
import FirstSection from "../components/TechnologyComponent/FirstSection/FirstSection";
import News from "../components/TechnologyComponent/News";
import NewsLetterComponent from "../components/HomeComponent/NewsLetterComponent";
import axios from "axios";

export default function Science(){
    const [science, setScience] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const getScienceNews = async ()=> {
            try {
                const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=aslDGOntLrjgiHi0raSPx9pDCMMiP8Uy');
    
                console.log(response.data.results);
                if(response.status == 200){
                    setScience(response.data.results);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getScienceNews()
    }, []);

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <>
            <FirstSection />
            <News news={science} />
            <NewsLetterComponent />
        </>
    )
}