// Minimal markdown-ish renderer: splits on blank lines, treats "## " as a
// heading and "- " lines as a bullet list. Avoids pulling in a markdown
// dependency for three blog posts.
export default function PostContent({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div className="prose-content space-y-5">
      {blocks.map((block, i) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={i} className="font-heading text-2xl font-bold text-navy-900 pt-2">
              {block.replace('## ', '')}
            </h2>
          );
        }
        if (block.split('\n').every((line) => line.startsWith('- '))) {
          return (
            <ul key={i} className="list-disc space-y-1 pl-5 text-slate-700">
              {block.split('\n').map((line, j) => (
                <li key={j}>{line.replace('- ', '')}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="leading-relaxed text-slate-700">
            {block}
          </p>
        );
      })}
    </div>
  );
}
