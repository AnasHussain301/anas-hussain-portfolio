import fs from "fs";
import path from "path";
import matter from "gray-matter";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";

import Mermaid from "@/components/Mermaid";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content",
    "blog",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return (
      <div className="max-w-4xl mx-auto py-20">
        <h1>404 - Blog Not Found</h1>
      </div>
    );
  }

  const file = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(file);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-4">
        {data.title}
      </h1>

      <p className="text-gray-500 mb-10">
        {data.date}
      </p>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            code(props) {
              const { className, children } = props;

              if (className === "language-mermaid") {
                return (
                  <Mermaid
                    chart={String(children).trim()}
                  />
                );
              }

              return (
                <code className={className}>
                  {children}
                </code>
              );
            },

            img(props) {
              return (
                <img
                  {...props}
                  className="rounded-xl shadow-xl my-8"
                />
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </main>
  );
}