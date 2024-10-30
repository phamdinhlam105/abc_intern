import EventPost from "@/components/event-post"

export default function EventList()
{
    //fetchdata
    const eventList = [
        {
            id:1,
            img:"https://s3-alpha-sig.figma.com/img/b1a2/1144/c4e1219d6fadc22a18264de4eff0d6dc?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o0l5EI51mYSsYGcFweCZR4UzFNhGsMnqmwOgy6UjotUR5bsi~Gq8pKXnssR1tEn7xjTYFdkdN4EquI7cq7rmuD1zmlSDZ~DveZz3sCldC-IPtHVWPFTgTSmcmK8ka~~oj2KQqCFM01aU5kBudwDxU1xiWrBhDwhblCIrqW5BIFaOui93bTeojhgJF50QgxkBx4qMlv7HtQjcSwPOB-SQQVOC8kMtSzQDveJAMo9c9CVm7xEtMNZ3DkKGVvR3gHKbmFlQwP6NkVD~CCYQnakOq0tuI8gvNTewrtlLuvwkPPsFkz85zvDM6kXS6gGhAY~IbJUhSvytrRgDoDYA7nkvMg__",
            title:"Cùng nhau phòng chống Covid",
            createDate:"03/03/2022",
            describe:"Offers college-level coursework and exams in various subjects, allowing students to ..."
        },
        {
            id:2,
            img:"https://s3-alpha-sig.figma.com/img/91a2/65f5/735480652d1c2c72ef3f870c0445597c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmVsWqw21GitLRp967iVbUARsexub8lx6~3OMKgGxhKsnlUJnAH34jksnyO9RoZFY6qi3S~sYMinzM66EqL2npyr62SZzRcaFOKMtm~p2~hOusES9LygwpBiqWUmkidDlX7SEythWN9uXYvxFIMb4GnBeLT1zRy8UjNJWOZr-jqi6GSQpFPJ4-xBIqs0vjv03hocLfd3cjk7S0UwAISrUhMgCtNn42tJC2rvYRZcbFia0J11a~~8r1-JiFwkij0CTg8b7uJASbULt-tqCy1CkHDwR29BsdmvBkppGX4udsvMcLyBnx6LbW~cB1U6CK7RKujQFBdoHReiCMU-nksjpw__",
            title:"Lễ tổng kết năm học 2023 - 2024",
            createDate:"03/03/2022",
            describe:"Offers college-level coursework and exams in various subjects, allowing students to ..."
        },
        {
            id:3,
            img:"https://s3-alpha-sig.figma.com/img/5121/f09f/5e8bed045ec585350d85add822d481fb?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GT8Uci8W5o8rLEi6Nc1dE5tERVuZjOveoeZO9luSHdZvWszFsyb6N7oNE7tLpXta-MUgTHUCLp3uuNWASoNH33BJv8nc88wIuYcZs9lkIuXQzNknE2OoY0wpKtysxwmi~4a72piFYWZsanfmiTeijGxMRzZGpL7CgWgZhS4U71mrhkO2YhL4h8IgX2IdWfYmA-kr1FjegadQKZrt1IyY2gL2r3hLlZIXlz4b18nXh6RINiSPpyukX4r6gm6xhVpeVARTDDw2EzTro5y2jPJqcCjlRxVsBbh~Y-OIntuldiCiTlmTJ~Lomve4b53aIef8wVhfsCcIAxTz~HvnNx-Z2g__",
            title:"Cuộc thi làm thiệp tặng thầy cô 20/10",
            createDate:"03/03/2022",
            describe:"Offers college-level coursework and exams in various subjects, allowing students to ..."
        }
    ]

    return (
        <div>
            <ul className="md:flex justify-between">
                {eventList.map(e=>{
                    return <li key={e.id} className="my-3 md:w-threecol bg-white text-black">
                        <EventPost{...e}/>
                    </li>
                })}
            </ul>
        </div>
    )
}