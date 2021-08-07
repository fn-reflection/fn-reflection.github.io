import 'sanitize.css';
import './app.scss';
import 'katex/dist/katex.min.css';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
