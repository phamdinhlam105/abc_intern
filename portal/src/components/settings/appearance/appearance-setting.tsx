import { Separator } from "@/components/ui/separator";
import ThemeSkeleton from "./theme-skeleton";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function AppearanceSetting() {
    const { theme, setTheme } = useTheme();
    const [chooseItem, setChooseItem] = useState(theme === 'light' ? 0 : 1);

    const lightThemeClick = () => {
        setChooseItem(0);
    }

    const darkThemeClick = () => {
        setChooseItem(1);
    }

    const saveTheme = () => {
        setTheme(chooseItem === 0 ? 'light' : 'dark');

    }

    return (
        <div>
            <h3 className="font-semibold text-lg">Giao diện</h3>
            <p className="text-gray-400 text-sm">Thay đổi ngôn ngữ của ứng dụng và chủ đề giao diện sáng hoặc tối.</p>
            <Separator className="my-4" />
            <p className="font-semibold">Chủ đề</p>
            <p className="text-gray-400 text-sm">Chọn chủ đề bạn muốn sử dụng.</p>
            <div className="grid grid-cols-2 gap-6 w-full px-2 py-2 w-2/3 place-items-center">
                <div>
                    <button
                        onClick={lightThemeClick}
                        className={`border border-2 rounded-md p-1 bg-white hover:bg-white h-fit
                    ${(chooseItem === 0) ? 'border-primary' : ''}`}>
                        <ThemeSkeleton theme="light" />
                    </button>
                    <p className="text-center">Sáng</p>
                </div>
                <div>
                    <button
                        onClick={darkThemeClick}
                        className={`border border-2 rounded-md p-1 bg-white hover:bg-white h-fit
                        ${(chooseItem === 1) ? 'border-primary' : ''}`}>
                        <ThemeSkeleton theme="dark" />
                    </button>
                    <p className="text-center">Tối</p>
                </div>
            </div>
            <Button
                onClick={saveTheme}
                className="font-semibold">
                Cập nhật
            </Button>
        </div>
    )
}