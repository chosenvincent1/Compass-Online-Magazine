import NewsCard from "./NewsCard";
import NewsTitleText from "./NewsTitleText";
import NewsDescription from "./NewsDescription";

export default function NewsHeadline({technology, travel, business, food}){
    const firstTech = technology.results[0];
    const firstFood = food.results[0];
    const firstBusiness = business.results[0];    
    return (
        <>
            <section className="flex gap-[39px] mb-[55px] ">
                <NewsTitleText titleLetter={technology.section}  />
                <div>
                    <NewsDescription section={technology.section} firstItem={firstTech} />

                    {technology.results.slice(0, 3).map((item, index) => <NewsCard key={index} url={item.url} title={item.title} abstract={item.abstract} date={item.published_date} byline={item.byline} image={item.multimedia[0]} />)}
                </div>
            </section>

            <section className="flex gap-[39px] mb-[55px] ">
                <NewsTitleText titleLetter={business.section}  />
                <div>
                    <NewsDescription section={business.section} firstItem={firstBusiness} />

                    {business.results.slice(0, 3).map((item, index) => <NewsCard key={index} url={item.url} title={item.title} abstract={item.abstract} date={item.published_date} byline={item.byline} image={item.multimedia[0]} />)}
                </div>
            </section>

            <section className="flex gap-[39px] mb-[55px] ">
                <NewsTitleText titleLetter={food.section}  />
                <div>
                    <NewsDescription section={food.section} firstItem={firstFood} />

                    {food.results.slice(0, 3).map((item, index) =>  <NewsCard key={index} url={item.url} title={item.title} abstract={item.abstract} date={item.published_date} byline={item.byline} image={item.multimedia[0]} />)}
                </div>
            </section>
        </>
    )
}