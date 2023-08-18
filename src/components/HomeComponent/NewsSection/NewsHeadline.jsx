import NewsCard from "./NewsCard";
import NewsTitleText from "./NewsTitleText";
import NewsDescription from "./NewsDescription";

export default function NewsHeadline(){
    return (
        <section className="flex gap-[39px] mb-[55px] ">
            <NewsTitleText />
            <div>
                <NewsDescription />
                <NewsCard />
            </div>
        </section>
    )
}