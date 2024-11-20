import Link from "next/link";

export default function Logo() {
    return (
        <div className=" py-2 px-2">
            <Link href={'/'} className="flex items-center">
                <img
                    className="object-cover w-12"
                    src="https://stage.portal.thpt-thd.abcsoftwarecompany.com/assets/logo-CSGuynr4.png"
                />
                <h2 className="ml-2 text-2xl font-bold bg-gradient-to-l from-primary to-neutral-50 text-transparent bg-clip-text">C2THDAO</h2>

            </Link>
        </div>
    )
}