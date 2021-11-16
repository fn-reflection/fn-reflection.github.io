import { useRef } from 'react';
import styles from './scroll_bars.module.scss'; 
import { useScrollPosition } from 'react-use-scroll-position';

const FakeContent: React.FC<{prefix: string}> = (props) => (
  <div style={{backgroundColor: '#def'}} >
    {`${props.prefix}: ${Array.from({length: 1000}, (_v, k) => k).map(n=>n.toString()).join()}`}
  </div>
);

const ScrollBars: React.VFC = () => {
  const scrolledContentRef = useRef();
  useScrollPosition(({ currPos }) => {
    console.log(currPos);
  }, [], scrolledContentRef
  );
  return (
    <article style={{height: '100vh', width: '100vw'}}>
      <div style={{height: '100%', display: 'flex'}}>

        <div style={{height: '100%',  overflowY: 'hidden', paddingRight: '1rem'}}>
          <div style={{height: '100%', width: '300px', overflowY: 'scroll',  overscrollBehavior: 'contain'}}>
            <FakeContent prefix="パターン1(標準)"/>
          </div>
        </div>

        <div style={{height: '100%',  overflowY: 'hidden'}}>
          <div className={styles['scroll-area']}>
            <div className={styles['scroll-thumb']}/>
            <div ref={scrolledContentRef} style={{backgroundColor: '#def'}} >
              {`パターン2(カスタムバー): ${Array.from({length: 1000}, (_v, k) => k).map(n=>n.toString()).join()}`}
            </div>
          </div>
        </div>

        <div style={{height: '100%',  width: '300px'}}>
        </div>

      </div>
    </article>
  ); };
export default ScrollBars;