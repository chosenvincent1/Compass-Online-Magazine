import Card from "./Card";
import Description from "./Description";
import TextTitle from "./TextTitle";

export default function Headline({news}){
    const firstNews = news.results[0];
    console.log(firstNews)

    if(firstNews === null){
        return <h1>Page not Found</h1>
    }

    return (
        <section className="flex gap-[39px] mb-[55px] ">
            <TextTitle titleLetter={news.section}  />
            <div>
                <Description title={news.section} firstNews={firstNews}  />

                {news.results.slice(1, 10).map((item, index)=> {
                    return <Card key={index} url={item.url} date={item.published_date} title={item.title} byline={item.byline} abstract={item.abstract}  />
                })}
            </div>
        </section>
    )
}