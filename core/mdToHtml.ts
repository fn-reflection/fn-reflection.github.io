import fs from 'fs'
import { join } from 'path';
import {unified} from 'unified';
import {getHighlighter} from 'shiki';

import toMdAst from 'remark-parse';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import remarkShiki from '@stefanprobst/remark-shiki';
import toHtmlAst from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import toHtml from 'rehype-stringify';


const solarizedDark = JSON.parse(
  fs.readFileSync(join(process.cwd(), "design_schemes/colors/solarized_dark.json"), "utf-8"),
)

const mdToHtml: (markdown: string) => Promise<string> = async markdown => {
  const shikiColorTheme = await getHighlighter({theme: 'solarized-dark'});
  const processor = unified()
    .use(toMdAst)
    .use(remarkMath) // allow katex
    .use(remarkGfm)  // allow table syntax
    .use(remarkShiki, {theme: solarizedDark}) // syntax highlighter
    .use(toHtmlAst, { allowDangerousHtml: true }) // markdown input is regarded as SAFE
    .use(rehypeKatex) // allow katex
    .use(rehypeRaw)
    .use(toHtml);
  const vfile = await processor.process(markdown);
  return vfile.toString();
};

export {mdToHtml};