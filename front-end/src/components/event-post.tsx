import DateWithCalendar from "./date-with-calendar"
import MoreDetailButton from "./more-detail-button"

export default function EventPost({img,title,createDate,describe}:{
    img:string,
    title:string,
    createDate:string,
    describe:string
})
{
    return(
        <div>
            <img 
            className="w-full h-64 object-cover "
            src={img} alt={title}/>
            <div className="px-5">
                <h2 className="text-2xl py-5">{title}</h2>
                <DateWithCalendar date={createDate}/>
                <hr className=" my-5 text-gray-600"/>
                <p className="text-gray-600">{describe}</p>
                <div className="flex justify-end py-5">
                    <MoreDetailButton src=""/>
                </div>
            </div>
        </div>
    )
}