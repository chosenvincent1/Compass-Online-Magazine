import NewsCard from "./NewsCard";
import NewsTitleText from "./NewsTitleText";
import NewsDescription from "./NewsDescription";

export default function NewsHeadline(props){
    // console.log(section, title, abstract)
    return (
        <section className="flex gap-[39px] mb-[55px] ">
            <NewsTitleText section={props.section} />
            <div>
                <NewsDescription section={props.section} title={props.title} abstract={props.abstract} />

                <NewsCard byline={props.byline} published_date={props.published_date} section={props.section} title={props.title} abstract={props.abstract} />
            </div>
        </section>
    )
}