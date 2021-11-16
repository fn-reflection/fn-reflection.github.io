import Head from 'next/head';
import Link from 'next/link';

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>fn-reflection</title>
      </Head>
      <section> 
        <div>
          <Link href="/posts">
            <a>fn-reflection&apos;s posts</a>
          </Link>
        </div>
        <div>
          <Link href="/sandboxes">
            <a>fn-reflection&apos;s sandboxes</a>
          </Link>
        </div>
      </section>
    </>
  );
}
