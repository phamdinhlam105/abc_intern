import DateWithCalendar from "@/components/date-with-calendar"


export default function PictureList() {
    //fetch data

    const gallery = [
        {
            img: "https://s3-alpha-sig.figma.com/img/6deb/9d4a/c3057bf9a1c899dafde84f96a8717591?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BfcXcXHrVI0wphCUxw4v6dYWkQ~teLd~9SGlyukdz~Lh-CvejZVgcURGaahyTb5WPobYnGsJNc7CJkLf0JwtcgWVF6ShJCNR7bQB8j9EnfI5ZXpnfCdUZofBldmTmC2Ay~EClC09reo~xBCtjVRlCdBsSOYrfsR-nLc2DtfW4CLCcK4-TAIBrRpy8iPkPfPRFz03vTDDYC7yPRBittYy2IFEKKPJR8rkiI-jAGQwfgW1hLfN7tdj--p9-QV63LYAilfXpAS3ya2I696H79UvUtpsdz0wHP-EyuK5mHZCvT6PbQLNFHuJdyx4PBgYLbza1fenYjmVdtX9PsmeLURtCg__",
            createDate: "08/03/2024",
            title: "Chào mừng 8/3",
            describe: "Ảnh 1",
        },
        {
            img: "https://s3-alpha-sig.figma.com/img/2393/c054/f7c00995e1057703ce16bc06f1897bd3?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h8xNlZbyGaIIw4LHHapJPlYGlNjptxVBaJj~SrHhuLVixQ3eYyEcoBjNMkpaMYVxonQoc0v9BU7WYVHxyPS36rbZbvmrvL3BVHfK6duJNNs7ExSYod7yQeVFMNg-R-aBN98-v-Y6hGGTs77dWMZdJ1nGq4wW5Cuc-lmA3NKdJewD-NzwsV0yHbpmimYZypNIwIadATKYTK3Wf9DSjMUdMtE0Ywn54-FIJc2U~zD3Pc19UziGSX~9udS2EcYED8~VfEB9Txt8ChCqQRi~UeyNYppesM7zujMgiU-bEqmEdzbN4Odylqns2CNjs5R2zOfhzSmYMGcmQADy2x1-cFs28w__",
            createDate: "08/03/2024",
            title: "Chào mừng 8/3",
            describe: "Ảnh 2",
        },
    ]
    return (
        <div className="md:w-7/12">
            <ul className="md:flex justify-between">
                {gallery.map((p, idx) => {
                    return <li key={idx} className="bg-primary md:w-twocol">
                        <div>
                            <img
                                className="object-cover w-full h-64"
                                src={p.img}
                                alt={p.title} />
                                <div className="py-5 px-3">
                                    <DateWithCalendar date={p.createDate}/>
                                    <h2 className="text-2xl font-bold my-3">{p.title}</h2>
                                    <p>{p.describe}</p>
                                </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}