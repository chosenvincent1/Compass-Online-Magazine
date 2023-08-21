import { useEffect, useState } from "react";
import LandingPage from "../components/HomeComponent/LandingPage";
import NewsSection from "../components/HomeComponent/NewsSection/Index";
import NewsLetterComponent from "../components/HomeComponent/NewsLetterComponent";
import axios from "axios";

export default function HomePage(){
    const [home, setHome] = useState(null);
    useEffect(()=> {
        const getHomeNews = async ()=> {
            try {
                
                const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=aslDGOntLrjgiHi0raSPx9pDCMMiP8Uy');
    
                console.log(response.data.results);
                if(response.status == 200){
                    setHome(response.data.results);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getHomeNews()
    }, []);


    
    return (
        <>
            <LandingPage />
            <NewsSection home={home} />
            <NewsLetterComponent />
        </>
    )
}