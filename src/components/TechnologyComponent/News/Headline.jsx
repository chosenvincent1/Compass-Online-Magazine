import Card from "./Card";
import Description from "./Description";
import TextTitle from "./TextTitle";

export default function Headline({news}){
    const firstNews = news[0];
    return (
        <section className="flex gap-[39px] mb-[55px] ">
            <TextTitle firstNews={firstNews}  />
            <div>
                <Description firstNews={firstNews}  />

                {news.map((item, index)=> {
                    return <Card key={index} date={item.published_date} title={item.title} image={item.multimedia[0]} byline={item.byline} abstract={item.abstract}  />
                })}
            </div>
        </section>
    )
}