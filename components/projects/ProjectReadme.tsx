import ReactMarkdown from "react-markdown";

interface Props {
    content: string;
}

export default function ProjectReadme({
    content,
}: Props) {

    return (

        <article className="prose prose-invert max-w-none">

            <ReactMarkdown>

                {content}

            </ReactMarkdown>

        </article>

    );

}