import { useEffect, useState } from "react";
import LandingPage from "../components/HomeComponent/LandingPage";
import NewsSection from "../components/HomeComponent/NewsSection/Index";
import NewsLetterComponent from "../components/HomeComponent/NewsLetterComponent";
import axios from "axios";

export default function HomePage(){
    const [home, setHome] = useState(null);
    const [business, setBusiness] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const getHomeNews = async ()=> {
            try {
                const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=aslDGOntLrjgiHi0raSPx9pDCMMiP8Uy');
    
                console.log(response.data.results);
                if(response.status == 200){
                    const businessArray = response.data.results.filter(item => item.section === 'business');
                    setBusiness(businessArray);

                    const technologyArray = response.data.results.filter(item=> item.section === 'technology');

                    setHome(response.data.results);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getHomeNews()
    }, []);

    if(isLoading) {
        return <div>Loading...</div>
    }

    console.log(business)

    return (
        <>
            <LandingPage />
            <NewsSection home={home} business={business} isLoading={isLoading}  />
            <NewsLetterComponent />
        </>
    )
}