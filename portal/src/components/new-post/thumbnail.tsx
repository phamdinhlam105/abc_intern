import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NewPostThumbnail({ thumbnail, setThumbnail }: {
    thumbnail: string,
    setThumbnail: React.Dispatch<React.SetStateAction<string>>
}) {

    return <div>
        {
            thumbnail ?
                <div>
                    <img src={thumbnail}
                        alt="ảnh bị lỗi"
                        className="object-contain w-full h-40 border rounded-sm" />
                    <Button
                        onClick={() => { setThumbnail('') }}
                        variant="outline">
                        Xóa ảnh</Button>
                </div >
                :
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant="outline"
                            className="border rounded-sm content-center w-full h-40">
                            <p className="text-md font-bold text-center">
                                Chưa có ảnh
                            </p>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader className="flex justify-between">
                            <DialogTitle>Thêm ảnh mới</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="url" className="text-right">
                                    URL ảnh
                                </Label>
                                <Input
                                    id="url"
                                    placeholder="hhtps://...."
                                    className="col-span-3"
                                    value={thumbnail}
                                    onChange={(e) => setThumbnail(e.target.value)}
                                />
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
        }
    </div>
}