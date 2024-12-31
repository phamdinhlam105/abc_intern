"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { getCategories, newCategory } from "../api";
import { toast } from "@/hooks/use-toast";

export default function NewCategoryBody() {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [position, setPosition] = useState<"LEFT" | "MAIN" | "RIGHT">("LEFT");
    const [status, setStatus] = useState<"visible" | "deleted">("visible");
    const [parentId, setParentId] = useState<string|null>(null);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getCategories();
                setCategories(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handlePositionChange = (value: "LEFT" | "MAIN" | "RIGHT") => {
        setPosition(value);
    }

    const handleStatusChange = (value: "visible" | "deleted") => {
        setStatus(value);
    }

    const handleParentCatgoryChange = (value: string | null) => {
        setParentId(value);
    }
    const handleNewCategory = async () => {
        const category = { name, status, slug, position, parentId };
        const result = await newCategory(category);
        if (result)
            toast({
                title: "CREATE CATEGORY",
                description: "Category created successfully"
            })
        else
            toast({
                title: "CREATE CATEGORY",
                description: "creation failed"
            })
    }

    return <div className="p-4 space-y-6 w-full h-full dark:bg-black">
        <div>
            <Label htmlFor='name' className="block text-xl font-semibold mb-1">
                Tên danh mục
            </Label>
            <Input
                id='name'
                className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <Label htmlFor='slug' className="block text-xl font-semibold mb-1">
                Đường dẫn
            </Label>
            <Input
                id='slug'
                className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
            />
        </div>

        <div className="flex space-x-10">
            <Label htmlFor='slug' className="block text-xl font-semibold mb-1">
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
            <Label className="block text-xl font-semibold mb-1">
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
        <div className="flex space-x-10">
            <Label className="block text-xl font-semibold mb-1">
                Danh mục cha
            </Label>
            <Select onValueChange={handleParentCatgoryChange}>
                <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Chọn danh mục cha" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup defaultValue='visible'>
                        <SelectItem value='none' className="font-semibold">Không có danh mục cha</SelectItem>
                        {categories.map(p =>
                            <SelectItem key={p.id} value={p.id} className="font-semibold">
                                {p.name}
                            </SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        <Button onClick={handleNewCategory}>
            Tạo danh mục
        </Button>
    </div>
}