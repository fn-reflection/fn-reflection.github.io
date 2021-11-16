import styles from './scroll_bars.module.scss'; 
import throttle from 'lodash/throttle';

const FakeContent: React.FC<{prefix: string}> = (props) => (
  <div style={{backgroundColor: '#def'}} >
    {`${props.prefix}: ${Array.from({length: 1000}, (_v, k) => k).map(n=>n.toString()).join()}`}
  </div>
);

const loggingToBeThrottled = ()=>console.log('abc');

const ScrollBars: React.VFC = () => {
  return (
    <article style={{height: '100vh', width: '100vw'}}>
      <div style={{height: '100%', display: 'flex'}}>

        <div style={{height: '100%',  overflowY: 'hidden', paddingRight: '1rem', flexShrink: 0}}>
          <div style={{height: '100%', width: '300px', overflowY: 'scroll',  overscrollBehavior: 'contain'}}>
            <FakeContent prefix="パターン1(標準)"/>
          </div>
        </div>

        <div style={{height: '100%',  overflowY: 'hidden', flexShrink: 0}}>
          <div onScroll={throttle(loggingToBeThrottled, 10)} className={styles['scroll-area']}>
            <div className={styles['scroll-thumb']}/>
            <div style={{backgroundColor: '#def'}} >
              {`パターン2(カスタムバー): ${Array.from({length: 1000}, (_v, k) => k).map(n=>n.toString()).join()}`}
            </div>
          </div>
        </div>

        <div style={{height: '100%',  width: '300px', flexShrink: 0}}>
        </div>

      </div>
    </article>
  ); };
export default ScrollBars;