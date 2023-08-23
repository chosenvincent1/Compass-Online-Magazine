import Card from "./Card";
import Description from "./Description";
import TextTitle from "./TextTitle";

export default function Headline({news}){
    const firstNews = news.results[0];

    return (
        <section className="flex gap-[39px] mb-[55px] ">
            <TextTitle titleLetter={news.section}  />
            <div>
                <Description firstNews={firstNews}  />

                {news.results.slice(0, 9).map((item, index)=> {
                    return <Card key={index} url={item.url} date={item.published_date} title={item.title} byline={item.byline} abstract={item.abstract}  />
                })}
            </div>
        </section>
    )
}