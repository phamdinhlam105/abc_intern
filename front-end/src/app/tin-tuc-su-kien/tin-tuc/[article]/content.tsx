
export default function ArticleContent({content, describe}:{content:string, describe:string}){

    const formatContent = ()=> content.split('\n').map((line, idx) => (
        <span key={idx}>
            {line}
            <br />
        </span>
    ))

    return (
        <div className="py-10 md:px-20 w-3/4">
            <p className="mt-20 font-bold">{describe}</p>
            <p className="mt-5">{formatContent()}</p>
        </div>
    )
}