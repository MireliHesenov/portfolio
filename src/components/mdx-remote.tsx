import { MDXRemote, MDXRemoteProps } from "next-mdx-remote-client/rsc";
import reHypePreLanguage from "rehype-pre-language";
import reHypeHighlight from "rehype-highlight";
import reHypeHighlightCodeLines from "rehype-highlight-code-lines";
import remarkCodeTitles from "remark-flexible-code-titles";

export function CustomMDXRemote({ ...props }: MDXRemoteProps) {
  return (
    <MDXRemote
      components={components}
      onError={() => <div>Error</div>}
      options={{
        parseFrontmatter: false,
        mdxOptions: {
          remarkPlugins: [remarkCodeTitles],
          rehypePlugins: [
            reHypePreLanguage,
            reHypeHighlight,
            reHypeHighlightCodeLines,
          ],
        },
      }}
      {...props}
    />
  );
}

function Code({ children, ...props }: React.ComponentProps<"code">) {
  return <code {...props}>{children}</code>;
}

const components = {
  code: Code,
};
