import { marked } from 'marked';

export default function PostContent({ content }: { content: string }) {
  const html = marked.parse(content) as string;
  return (
    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
