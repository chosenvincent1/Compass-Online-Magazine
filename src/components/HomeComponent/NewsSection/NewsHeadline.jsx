import NewsCard from "./NewsCard";
import NewsTitleText from "./NewsTitleText";
import NewsDescription from "./NewsDescription";

export default function NewsHeadline({technology, food}){
    const firstTech = technology[0];
    const firstFood = food.results[0]

    console.log(food.results)

    return (
        <>
            <section className="flex gap-[39px] mb-[55px] ">
                <NewsTitleText firstItem={firstTech}  />
                <div>
                    <NewsDescription firstItem={firstTech} />

                    {technology.slice(0, 3).map(item => <NewsCard title={item.title} abstract={item.abstract} published_date={item.published_date} byline={item.byline} />)}
                    
                </div>
            </section>

            <section className="flex gap-[39px] mb-[55px] ">
                {/* <NewsTitleText firstItem={firstFood}  /> */}
                <div>
                    <NewsDescription firstItem={firstFood} />

                    {/* {food.results.slice(0, 3).map(item => <NewsCard title={item.title} abstract={item.abstract} published_date={item.published_date} byline={item.byline} />)} */}
                    
                </div>
            </section>
        </>
    )
}