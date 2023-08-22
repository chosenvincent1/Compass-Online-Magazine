
export default function NewsTitleText(props){
    // const titleLetter = props.firstItem.section.charAt(0).toUpperCase();
    // console.log(props.firstItem)
    return (
        <div style={{
            backgroundImage: 'url(../images/news-bg-1.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} className="h-[180px] w-[180px] flex items-center justify-center font-Montserrat ">
            <p className="text-[100px] font-Chonburi uppercase font-[400] "></p>
        </div>
    )
}