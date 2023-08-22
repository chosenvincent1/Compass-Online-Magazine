import { useEffect, useState } from "react";
import LandingPage from "../components/HomeComponent/LandingPage";
import NewsSection from "../components/HomeComponent/NewsSection/Index";
import NewsLetterComponent from "../components/HomeComponent/NewsLetterComponent";
import axios from "axios";

export default function HomePage(){
    const [home, setHome] = useState(null);
    const [business, setBusiness] = useState([]);
    const [technology, setTechnology] = useState([]);
    const [food, setFood] = useState([]);
    const [world, setWorld] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const getTechNews = async ()=> {
            try {
                const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=aslDGOntLrjgiHi0raSPx9pDCMMiP8Uy');

                console.log(response.data)
    
                if(response.status == 200){
                    setTechnology(response.data.results);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getTechNews()
    }, []);

    useEffect(()=> {
        const getFoodNews = async ()=> {
            try {
                const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/food.json?api-key=aslDGOntLrjgiHi0raSPx9pDCMMiP8Uy');

                if(response.status == 200){
                    setFood(response.data);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getFoodNews();
    }, []);

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <LandingPage />
            <NewsSection food={food} technology={technology}   />
            <NewsLetterComponent />
        </>
    )
}