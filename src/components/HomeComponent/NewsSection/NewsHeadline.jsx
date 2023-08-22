import NewsCard from "./NewsCard";
import NewsTitleText from "./NewsTitleText";
import NewsDescription from "./NewsDescription";

export default function NewsHeadline(props){
    const firstItem = props.business[0];
    const firstTech = props.technology[0];
    const firstWorld = props.world[0];
    return (
        <>
            <section className="flex gap-[39px] mb-[55px] ">
                <NewsTitleText firstItem={firstTech}  />
                <div>
                    <NewsDescription firstItem={firstTech} />

                    {props.technology.slice(0, 3).map(item => <NewsCard title={item.title} abstract={item.abstract} published_date={item.published_date} byline={item.byline} />)}
                    
                </div>
            </section>

            <section className="flex gap-[39px] mb-[55px] ">
                <NewsTitleText firstItem={firstItem}  />
                <div>
                    <NewsDescription firstItem={firstItem} />

                    {props.business.slice(0, 3).map(item => <NewsCard title={item.title} abstract={item.abstract} published_date={item.published_date} byline={item.byline} />)}
                    
                </div>
            </section>

            <section className="flex gap-[39px] mb-[55px] ">
                <NewsTitleText firstItem={firstWorld}  />
                <div>
                    <NewsDescription firstItem={firstWorld} />

                    {props.world.slice(0, 3).map(item => <NewsCard title={item.title} abstract={item.abstract} published_date={item.published_date} byline={item.byline} />)}
                    
                </div>
            </section>
        </>
    )
}