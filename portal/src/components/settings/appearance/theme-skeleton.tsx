import { Skeleton } from "@/components/ui/skeleton";

export default function ThemeSkeleton({ theme }: { theme: string }) {
    return (
        <div className={`w-full rounded-md ${theme === 'dark' ? 'bg-neutral-900' : 'bg-gray-200'} p-2 space-y-2`}>
            <div className={`rounded-md  ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'} p-2 w-full space-y-2`}>
                <Skeleton className={`${theme === 'dark' ? 'bg-slate-400' : 'bg-gray-200'} h-2 w-[100px]`} />
                <Skeleton className={`${theme === 'dark' ? 'bg-slate-400' : 'bg-gray-200'} h-2 w-[130px]`} />
            </div>
            <div className={`rounded-md  ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'} p-2 w-full space-y-2`}>
                <Skeleton className={`${theme === 'dark' ? 'bg-slate-400' : 'bg-gray-200'} h-2 w-[100px]`} />
                <Skeleton className={`${theme === 'dark' ? 'bg-slate-400' : 'bg-gray-200'} h-2 w-[130px]`} />
            </div> <div className={`rounded-md  ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'} p-2 w-full space-y-2`}>
                <Skeleton className={`${theme === 'dark' ? 'bg-slate-400' : 'bg-gray-200'} h-2 w-[100px]`} />
                <Skeleton className={`${theme === 'dark' ? 'bg-slate-400' : 'bg-gray-200'} h-2 w-[130px]`} />
            </div>
        </div>
    )
}