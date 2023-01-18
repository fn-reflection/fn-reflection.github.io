import Head from 'next/head';
import Link from 'next/link';

export default function Index(): JSX.Element {
  return <>
    <Head>
      <title>fn-reflection</title>
    </Head>
    <section> 
      <div>
        <Link href="/posts">
          fn-reflection&apos;s posts
        </Link>
      </div>
      <div>
        <Link href="/sandboxes">
          fn-reflection&apos;s sandboxes
        </Link>
      </div>
    </section>
  </>;
}
