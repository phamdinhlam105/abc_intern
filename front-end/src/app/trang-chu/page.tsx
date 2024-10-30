import MoreDetailButton from "@/components/more-detail-button"
import Announcements from "./anouncement/announcementsList"
import AnnoucementTitle from "./anouncement/title"
import Banner from "./banner/banner"
import LastestNews from "./banner/lastestNews"
import Title from "./banner/title"
import EventList from "./event/event-list"
import EventTitle from "./event/title"
import LinkTitle from "./links/title"
import LinkList from "./links/link-list"
import GalleryTitle from "./gallery/title"
import PictureList from "./gallery/picture-list"
import MorePicture from "./gallery/more-picture"
import BottomImage from "./bottom-image/image"
export default function Page() {
    return (
        <div className=" relative w-full">
            {/*banner*/}
            <Title />
            <LastestNews />
            <Banner />

            {/*annoucements*/}
            <div className="md:flex md:px-20 md:my-20 px-3 py-3">
                <AnnoucementTitle />
                <Announcements />
            </div>

            {/*events*/}
            <div className=" md:px-20 md:my-20 bg-secondary text-white md:py-20 px-3 py-3">
                <div className="flex justify-between mb-10">
                    <EventTitle />
                    <MoreDetailButton src="#" />
                </div>
                <EventList />
            </div>

            {/*links*/}
            <div className="relative md:px-20 px-3 py-10">
                <LinkTitle />
                <LinkList />
            </div>

            {/*gallery*/}
            <div className="md:flex py-10 md:px-20 px-3 justify-between">
                <GalleryTitle/>
                <PictureList/>
                <MorePicture/>
            </div>

            {/*bottom image*/}
            <BottomImage/>
        </div>

    )
}