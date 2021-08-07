import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Post from 'interfaces/post';

const postsDirectory = join(process.cwd(), 'contents');
const getPostSlugs : () => string[] = () => fs.readdirSync(postsDirectory);
const getPostBySlug : (slug: string) => Post = slug => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    date: data.date,
    excerpt: data.excerpt,
    slug: realSlug,
    title: data.title,
    content,
  };
};

const getAllPosts: () => Post[] = ()=> getPostSlugs()
  .map(slug => getPostBySlug(slug))
  .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

export {getPostBySlug, getAllPosts};