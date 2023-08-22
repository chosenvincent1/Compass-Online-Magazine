import Card from "./Card";
import Description from "./Description";
import TextTitle from "./TextTitle";

export default function Headline({technology}){
    const firstTech = technology[0];
    return (
        <section className="flex gap-[39px] mb-[55px] ">
            <TextTitle firstItem={firstTech}  />
            <div>
                <Description firstItem={firstTech}  />

                {technology.map(item=> {
                    return <Card date={item.published_date} title={item.title} byline={item.byline} abstract={item.abstract}  />
                })}
                
            </div>
        </section>
    )
}