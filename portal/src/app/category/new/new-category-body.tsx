"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function NewCategoryBody() {

    const [newCategory, setNewCategory] = useState<Category>();
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [position, setPosition] = useState<"LEFT" | "MAIN" | "RIGHT">("LEFT");
    const [status, setStatus] = useState<"visible" | "deleted">("visible");

    const handlePositionChange = (value: "LEFT" | "MAIN" | "RIGHT") => {
        setPosition(value);
    }

    const handleStatusChange = (value: "visible" | "deleted") => {
        setStatus(value);
    }

    return <div className="p-4 space-y-6 w-2/3">
        <div>
            <Label htmlFor='name' className="block text-xl font-semibold text-gray-700 mb-1">
                Tên danh mục
            </Label>
            <Input
                id='name'
                className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
            <Label htmlFor='slug' className="block text-xl font-semibold text-gray-700 mb-1">
                Đường dẫn
            </Label>
            <Input
                id='slug'
                className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        <div className="flex space-x-10">
            <Label htmlFor='slug' className="block text-xl font-semibold text-gray-700 mb-1">
                Vị trí
            </Label>
            <Select onValueChange={handlePositionChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Chọn vị trí" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup defaultValue="LEFT">
                        <SelectItem value='LEFT' className="text-green-300 font-semibold">LEFT</SelectItem>
                        <SelectItem value='MAIN' className="text-green-300 font-semibold">MAIN</SelectItem>
                        <SelectItem value='RIGHT' className="text-green-300 font-semibold">RIGHT</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

        </div>
        <div className="flex space-x-10">
            <Label className="block text-xl font-semibold text-gray-700 mb-1">
                Trạng thái
            </Label>
            <Select onValueChange={handleStatusChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Chọn trạng thái" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup defaultValue='visible'>
                        <SelectItem value='visible' className="text-green-400 font-semibold">VISIBLE</SelectItem>
                        <SelectItem value='deleted' className="text-red-500 font-semibold">DELETED</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>

        <Button>
            Tạo danh mục
        </Button>
    </div>
}