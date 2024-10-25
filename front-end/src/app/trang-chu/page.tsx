import Banner from "./banner/banner"
import LastestNews from "./banner/lastestNews"
import Title from "./banner/title"
export default function Page() {
    return (
        <div className="container mx-auto px-20">
            <div className="grid grid-cols-2 gap-5">
                <div className="grid grid-rows-2">
                    <Title />
                    <LastestNews/>
                </div>
                <Banner />
            </div>  

        </div>
    )
}