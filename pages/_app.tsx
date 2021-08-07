import 'sanitize.css';
import 'katex/dist/katex.min.css';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
