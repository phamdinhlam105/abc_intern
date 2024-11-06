import LoadingIcon from "@/components/loading-icon";

export default function Loading() {
    return (
        <div role="status">
            <LoadingIcon />
            <span className="sr-only">Loading...</span>
        </div>
    )
}