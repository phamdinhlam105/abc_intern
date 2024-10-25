import Announcements from "./anouncement/announcementsList"
import AnnoucementTitle from "./anouncement/title"
import Banner from "./banner/banner"
import LastestNews from "./banner/lastestNews"
import Title from "./banner/title"
export default function Page() {
    return (
        <div className=" relative w-full">
            <Title />
            <LastestNews />
            <Banner />
            <div className="flex px-20 my-20">
            <AnnoucementTitle/>
            <Announcements/>
            </div>
        </div>

    )
}