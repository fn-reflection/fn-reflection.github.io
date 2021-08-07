import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../core/api';
import Post from '../interfaces/post';
import { GetStaticProps } from 'next';

export default function Index(props: {
  allPosts: Post[]
}): JSX.Element {
  return (
    <>
      <Head>
        <title>fn-reflection</title>
      </Head>
      <section> 
        {props.allPosts.map((post) => (
          <div key={post.slug}>
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a>{post.title}</a>
            </Link>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();
  return {
    props: { allPosts },
  };
};
