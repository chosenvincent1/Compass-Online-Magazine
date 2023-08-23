
export default function TextTitle({firstNews}){
    const sectionLetter = firstNews.section.charAt(0).toUpperCase();
    return (
        <div style={{
            backgroundImage: 'url(../images/news-bg-1.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} className="h-[180px] w-[180px] flex items-center justify-center font-Montserrat ">
            <p className="text-[100px] font-Chonburi uppercase font-[400] ">{sectionLetter}</p>
        </div>
    )
}