import { useEffect, useState } from "react";
import FirstSection from "../components/TechnologyComponent/FirstSection/FirstSection";
import News from "../components/TechnologyComponent/News";
import NewsLetterComponent from "../components/HomeComponent/NewsLetterComponent";
import axios from "axios";

export default function Food(){
    const [food, setFood] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const getHomeNews = async ()=> {
            try {
                const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/food.json?api-key=aslDGOntLrjgiHi0raSPx9pDCMMiP8Uy');
    
                console.log(response.data.results);
                if(response.status === 200){
                    setFood(response.data);
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
            <FirstSection />
            {isLoading ? <div className="py-[50px] text-center font-[700] text-[50px] ">Loading...</div> : <News news={food} />}
            <NewsLetterComponent />
        </>
    )
}