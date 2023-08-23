
export default function NewsTitleText({titleLetter}){
    return (
        <div style={{
            backgroundImage: 'url(../images/news-bg-1.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} className="h-[180px] w-[180px] flex items-center justify-center font-Montserrat ">
            <p className="text-[100px] font-Chonburi uppercase font-[400] ">{titleLetter.charAt(0).toUpperCase()}</p>
        </div>
    )
}