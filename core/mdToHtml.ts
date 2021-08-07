// import prism from 'remark-prism';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkShiki from '@stefanprobst/remark-shiki';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

async function mdToHtml(
  markdown: string
): Promise<string> {
  const processor =  unified()
    .use(remarkParse)
    .use(remarkGfm) 
    .use(remarkShiki)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify);
  const vfile = await processor.process(markdown);
  return vfile.toString();
}

export {mdToHtml};