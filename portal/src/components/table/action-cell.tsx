
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const ActionCell = ({ idRow, onDelete }: { idRow: string,onDelete: (idRow:string) => void }) => {

    return (
        <div className="flex justify-center w-23">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background shadow w-32 h-8 items-center py-1 px-1 rounded-md">
                    <DropdownMenuItem
                        onClick={() => onDelete(idRow)}
                        className="py-1 px-2 items-center bg-background border hover:bg-gray-200 dark:hover:bg-slate-900 hover:outline-none rounded-sm"
                    >
                        Xóa
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default ActionCell;
