import Image from 'next/image'
export default function Banner() {
    return (
        <div className="container w-1/2 absolute inset-y-0 right-0 invisible md:visible">
            <img
                className="object-cover"
                src="/images/banner.svg"
                alt="banner"
            />
        </div>

    )
}