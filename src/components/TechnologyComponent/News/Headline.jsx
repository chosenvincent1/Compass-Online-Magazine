import Card from "./Card";
import Description from "./Description";
import TextTitle from "./TextTitle";

export default function Headline(props){
    return (
        <section className="flex gap-[39px] mb-[55px] ">
            <TextTitle />
            <div>
                <Description  />

                {props.technology.map(item=> {
                    return <Card date={item.published_date} title={item.title} byline={item.byline} abstract={item.abstract}  />
                })}
                
            </div>
        </section>
    )
}