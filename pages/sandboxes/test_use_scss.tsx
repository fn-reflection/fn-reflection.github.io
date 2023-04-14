import styles from './test_use_scss.module.scss';

export default function TestUseSCSS(): JSX.Element {
  return (
    <div>
      <p className={styles.heading}>SCSSのuseを用いてスタイル定義を引っ張ってきた。</p>
      <p className={styles.heading}>出力CSSに不使用スタイル定義が使われていないことを確認</p>
    </div>
  );
}
