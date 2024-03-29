import Head from 'next/head';
import Link from 'next/link';

export default function Index(): JSX.Element {
  return <>
    <Head>
      <title>fn-reflection&apos;s posts</title>
    </Head>
    <section> 
      <div>
        <Link href="/">
          ..
        </Link>
        <p>上へ</p>
      </div>
      <div>
        <Link href="/posts/yarn">
          yarn
        </Link>
        <p>yarnを扱う上での便利コマンド</p>
      </div>
    </section>
    <section> 
    </section>
  </>;
}
