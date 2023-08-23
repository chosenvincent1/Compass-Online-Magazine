import NewsCard from "./NewsCard";
import NewsTitleText from "./NewsTitleText";
import NewsDescription from "./NewsDescription";

export default function NewsHeadline({technology, food}){
    const firstTech = technology.results[0];
    const firstFood = food.results[0];

    // console.log(firstTech)
    // console.log(firstFood)

    return (
        <>
            <section className="flex gap-[39px] mb-[55px] ">
                <NewsTitleText titleLetter={technology.section}  />
                <div>
                    <NewsDescription section={technology.section} firstItem={firstTech} />

                    {technology.results.slice(0, 3).map((item, index) => <NewsCard key={index} title={item.title} abstract={item.abstract} published_date={item.published_date} byline={item.byline} image={item.multimedia[0]} />)}
                </div>
            </section>

            <section className="flex gap-[39px] mb-[55px] ">
                <NewsTitleText titleLetter={food.section}  />
                <div>
                    <NewsDescription section={food.section} firstItem={firstFood} />

                    {food.results.slice(0, 3).map((item, index) => <NewsCard key={index} title={item.title} abstract={item.abstract} published_date={item.published_date} byline={item.byline} image={item.multimedia[0]} />)}
                </div>
            </section>
        </>
    )
}