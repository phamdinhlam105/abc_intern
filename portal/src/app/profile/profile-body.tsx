import DefaultAvatar from "@/components/profile/default-avatar";
import { PROFILE } from "@/components/profile/constants/profile.constants";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default function ProfileBody() {

    return <div className="p-4">
        <div className=" rounded-t-md flex items-end h-60 bg-animation shadow-md border"
            style={
                {
                    backgroundImage: 'url("https://stage.portal.thpt-thd.abcsoftwarecompany.com/assets/cover-bg-DKlXl6NX.jpg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }
            }>
            <div className="bg-white h-28 w-full divide-y">
                <div className="flex space-x-2 items-center justify-between px-4 h-full">
                    <div className="relative h-full flex flex-col justify-center">
                        <div className="absolute -top-1/2 scale-3">
                            {PROFILE.picture ?
                                <Avatar className="h-full">
                                    <AvatarImage
                                        src={PROFILE.picture}
                                        alt="avatar"
                                        className="object-cover h-32 rounded-full border border-4 border-white">

                                    </AvatarImage>
                                </Avatar> :
                                <DefaultAvatar name={PROFILE.name} size={32} />}
                        </div>
                        <h3 className="font-bold text-2xl ml-40">{PROFILE.name}</h3>
                        <p className="text-md ml-40">{PROFILE.mail}</p>
                    </div>
                    <div>
                        <button className="h-10 ml-auto bg-primary text-white p-2 px-4 rounded-md text-sm font-semibold">
                            Sửa thông tin cá nhân
                        </button>
                    </div>
                </div>
                <Tabs defaultValue="overview">
                    <TabsList className=" h-12 border-l border-r border-b shadow-sm rounded-b-md bg-white w-full space-x-1 justify-start px-2 py-0 z-10">
                        <TabsTrigger value="overview" >Tổng quan</TabsTrigger>
                        <TabsTrigger value="posts" >Bài viết</TabsTrigger>
                        <TabsTrigger value="actions" >Hoạt động</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="flex grid-rows-1 space-x-2">
                        <div className="border rounded-md w-7/12 shadow-md">
                            <h3 className="font-bold my-2 mx-4">Thông tin của tôi</h3>
                            <Separator />
                            <div className="py-4 px-4">
                                <h4 className="font-bold uppercase mb-3">Tiểu sử</h4>
                                <div className="grid grid-cols-2">
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-sm">SỐ ĐIỆN THOẠI</h4>
                                        <p className="text-sm">{PROFILE.phone}</p>
                                        <h4 className="font-bold text-sm">EMAIL</h4>
                                        <p className="text-sm">{PROFILE.mail}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-sm">NGÀY SINH</h4>
                                        <p className="text-sm">{PROFILE.birthDate ? PROFILE.birthDate : 'Không xác định'}</p>
                                        <h4 className="font-bold text-sm">QUỐC GIA</h4>
                                        <p className="text-sm">{PROFILE.country}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-md w-5/12 shadow-md">
                            <h3 className="font-bold my-2 mx-4">Photos</h3>
                            <Separator />
                        </div>
                    </TabsContent>
                    <TabsContent value="posts">
                        COMING SOON
                    </TabsContent>
                    <TabsContent value="actions">
                        COMING SOON
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>
}