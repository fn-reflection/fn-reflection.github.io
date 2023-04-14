import Head from 'next/head';
import Link from 'next/link';

export default function Index(): JSX.Element {
  return <>
    <Head>
      <title>fn-reflection&apos;s sandboxes</title>
    </Head>
    <section>
      <div>
        <Link href="/">
          ..
        </Link>
        <p>上へ</p>
      </div>
      <div>
        <Link href="/sandboxes/css_box_models">
          CSS Box Models
        </Link>
        <p>CSS Box Modelのテスト用</p>
      </div>
      <div>
        <Link href="/sandboxes/scroll_bars">
          Scroll Bars
        </Link>
        <p>何かとややこしいスクロールバーのテスト</p>
      </div>
      <div>
        <Link href="/sandboxes/encoding_conversion">
          Encoding Conversion
        </Link>
        <p>コード変換アプリ(データ永続化一切無し)</p>
      </div>
      <div>
        <Link href="/sandboxes/test_ace_editor">
          Try Ace Editor
        </Link>
        <p>Ace EditorのAPI, UX検証用(React Aceは一旦なしで)</p>
      </div>
      <div>
        <Link href="/sandboxes/test_use_scss">
          Check SCSS Use Output
        </Link>
        <p>SCSSでuseを使った場合コンパイル結果に使われていない変数が現れるか？</p>
      </div>
    </section>
    <section>
    </section>
  </>;
}
