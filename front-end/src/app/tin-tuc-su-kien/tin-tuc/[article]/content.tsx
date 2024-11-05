
export default function ArticleContent({ content, describe }: { content: string, describe: string }) {

    return (
        <div className="py-10 md:px-20 w-3/4">
            <p className="mt-20 font-bold">{describe}</p>
            <pre className="whitespace-pre-wrap">
                <span dangerouslySetInnerHTML={{ __html: content }} />
            </pre>
        </div >
    )
}