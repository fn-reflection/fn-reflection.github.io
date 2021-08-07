import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from 'core/api';
import {mdToHtml} from 'core/mdToHtml';
import PostData from 'interfaces/post';

export default function Post({ post }: { post: PostData;}): JSX.Element {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <article>
      {post.title}
      <div dangerouslySetInnerHTML={{ __html: post.content }}/>
    </article>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  if (typeof slug !== 'string') {
    return { props: {} };
  }
  const post = getPostBySlug(slug);
  const content = await mdToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
