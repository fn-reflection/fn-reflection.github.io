import Head from 'next/head';
import Link from 'next/link';

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>fn-reflection&apos;s sandboxes</title>
      </Head>
      <section> 
        <div>
          <Link href="/">
            <a>..</a>
          </Link>
          <p>上へ</p>
        </div>
        <div>
          <Link href="/sandboxes/css_box_models">
            <a>CSS Box Models</a>
          </Link>
          <p>CSS Box Modelのテスト用</p>
        </div>
        <div>
          <Link href="/sandboxes/scroll_bars">
            <a>Scroll Bars</a>
          </Link>
          <p>何かとややこしいスクロールバーのテスト</p>
        </div>
        <div>
          <Link href="/sandboxes/encoding_conversion">
            <a>Encoding Conversion</a>
          </Link>
          <p>コード変換アプリ(データ永続化一切無し)</p>
        </div>
      </section>
      <section> 
      </section>
    </>
  );
}
