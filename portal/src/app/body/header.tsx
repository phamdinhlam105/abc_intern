import ShowSideBarButton from "@/components/show-side-bar-button";

export default function Header({title}:{title:string}){

    return(
        <div className="flex boderLine border-b h-16 items-center sticky top-0 bg-white z-50">
            <ShowSideBarButton/>
            <h2 className="ml-2 text-xl font-bold">{title}</h2>
        </div>
    )
}