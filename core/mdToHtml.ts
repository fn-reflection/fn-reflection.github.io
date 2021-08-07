// import prism from 'remark-prism';
import {unified} from 'unified';
import toMdAst from 'remark-parse';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import remarkShiki from '@stefanprobst/remark-shiki';
import toHtmlAst from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import toHtml from 'rehype-stringify';

const mdToHtml: (markdown: string) => Promise<string> = async markdown => {
  const processor =  unified()
    .use(toMdAst)
    .use(remarkMath) // allow katex
    .use(remarkGfm)  // allow table syntax
    .use(remarkShiki) // syntax highlighter
    .use(toHtmlAst, { allowDangerousHtml: true }) // markdown input is regarded as SAFE
    .use(rehypeKatex) // allow katex
    .use(rehypeRaw)
    .use(toHtml);
  const vfile = await processor.process(markdown);
  return vfile.toString();
};

export {mdToHtml};