import LandingPage from "../components/HomeComponent/LandingPage";
import NewsSection from "../components/HomeComponent/NewsSection/Index";
import NewsLetterComponent from "../components/HomeComponent/NewsLetterComponent";

export default function HomePage(){
    return (
        <>
            <LandingPage />
            <NewsSection />
            <NewsLetterComponent />
        </>
    )
}