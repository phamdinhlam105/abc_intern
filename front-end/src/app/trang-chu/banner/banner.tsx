import Image from 'next/image'
export default function Banner() {
    return (
        <div className="relative w-full">
            <img
                className="h-auto max-w-full"
                src="/images/Banner.svg"
                style={{objectFit: "contain"}}
                alt="banner"
            />
        </div>

    )
}