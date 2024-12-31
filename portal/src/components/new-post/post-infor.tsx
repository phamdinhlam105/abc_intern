import { FormEvent, useEffect, useState } from "react";
import { Article } from "../article/model/article-model";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { getCategories } from "@/app/category/api";
import NewPostThumbnail from "./thumbnail";

export default function NewPostInformation({ setPost }: {
    setPost: React.Dispatch<React.SetStateAction<Article>>
}) {

    const [idCategory, setIdCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [status, setStatus] = useState<"published" | "draft" | "deleted">("draft");
    const [thumbnail, setThumbnail] = useState('');
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fechtData = async () => {
            const data = await getCategories();
            setCategories(data);
        }
        fechtData();
    }, []
    )

    useEffect(() => {
        const category = categories.findLast(c => c.id === idCategory);
        if (category)
            setPost(prevPost => ({
                ...prevPost,
                category,
                author,
                status,
                thumbnail
            }));
    }, [idCategory, author, status, thumbnail]);

    const handleStatusChange = (value: "published" | "draft" | "deleted") => {
        setStatus(value)
    }
    

    return <div className="border rounded-md shadow-sm w-1/3 p-4 bg-background">
        <h2 className="text-2xl font-bold my-2">Thông tin bài viết</h2>
        <div className="flex justify-between items-center my-4">
            <Label className="block text-md font-semibold mb-1">
                Danh mục
            </Label>
            <Select onValueChange={(value) => setIdCategory(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Chọn một danh mục" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {categories.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>

        <Label htmlFor='author' className="block text-xl font-semibold mt-10">
            Tác giả
        </Label>
        <Input
            id='author'
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        />

        <div className="flex justify-between items-center my-4 space-x-2">
            <Label className="block text-md font-semibold">
                Trạng thái
            </Label>
            <Select onValueChange={handleStatusChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup defaultValue='draft'>
                        <SelectItem value='draft' className="text-yellow-300 font-semibold">Draft</SelectItem>
                        <SelectItem value='published' className="text-green-300 font-semibold">Published</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>

        <div className="">
            <Label htmlFor='thumbnail' className="block text-xl font-semibold mt-10">
                Ảnh đại diện
            </Label>
            <NewPostThumbnail thumbnail={thumbnail} setThumbnail={setThumbnail} />
        </div>
    </div>
}