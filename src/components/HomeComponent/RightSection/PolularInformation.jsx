import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PopularInformation(){
    const [home, setHome] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const getHomeNews = async ()=> {
            try {
                const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=aslDGOntLrjgiHi0raSPx9pDCMMiP8Uy');
    
                if(response.status == 200){
                    setHome(response.data.results);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getHomeNews();
    }, [])

    if(isLoading) {
        return <div>Loading...</div>
    }


    return (
        <section className="font-Montserrat ">
            <h2 className="text-[16px] font-[700] uppercase mb-[40px] ">Popular Information</h2>

            {home.slice(0, 3).map((item, index)=> {
                let image = item.multimedia[0]
                if(item.section == 'technology' || item.section == 'business'){
                    return (
                        <div key={index} className="mb-[64.32px]">
                            <div className="relative ">
                                <div className="w-[260px] mb-[10px] h-[111.867px] bg-[#D2D8E1] " >
                                    <img src={image.url} alt="" className="w-full h-full " />
                                </div>
                                <div className="absolute bottom-0 text-[#1049CC] bg-[#fff] p-[4px] capitalize ">{item.section}</div>
                            </div>
    
                            <p className="text-[8px] font-[400] text-[#5A6372] mb-[5px] ">Posted {item.published_date}</p>
    
                            <h2 className="mb-[20px] text-[#171A22] font-Chonburi ">{item.title}</h2>
    
                            <p className="text-[11px] font-[400] text-[#5A6372] mb-[10px] ">{item.abstract}</p>
    
                            <Link to={`/${item.section}`} className="uppercase font-[700] text-[#1049CC] text-[12px] ">Go to Headline</Link>
                        </div>
                    )
                }
            })}

            
        </section>
    )
}