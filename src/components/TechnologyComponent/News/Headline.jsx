import Card from "./Card";
import Description from "./Description";
import TextTitle from "./TextTitle";

export default function Headline({news}){
    const firstNews = news.results[1];

    if(firstNews === null){
        return <h1>Page not Found</h1>
    }

    return (
        <section className="flex gap-[39px] mb-[55px] ">
            <TextTitle titleLetter={news.section}  />
            <div>
                <Description title={news.section} firstNews={firstNews}  />

                {news.results.slice(2, 11).map((item, index)=> {
                    const imageUrl = item.multimedia ? item.multimedia[0].url : '';
                    if(imageUrl === '') {
                        return null;
                    }
                    return <Card key={index} url={item.url} date={item.published_date} image={imageUrl} title={item.title} byline={item.byline} abstract={item.abstract}  />
                })}
            </div>
        </section>
    )
}