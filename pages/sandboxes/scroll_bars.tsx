import styles from './scroll_bars.module.scss'; 
import throttle from 'lodash/throttle';
import { useState } from 'react';

const FakeContent: React.FC<{prefix: string}> = (props) => (
  <div style={{backgroundColor: '#def'}} >
    {`${props.prefix}: ${Array.from({length: 1000}, (_v, k) => k).map(n=>n.toString()).join()}`}
  </div>
);

type ScrollThumbStyle =  {
  top: string;
  height: string;
}

const calcThumbStyle =(target: HTMLDivElement): ScrollThumbStyle=>{
  const ratio = target.offsetHeight/target.scrollHeight;
  return {top:`${target.scrollTop*(1+ratio)}px`, height: `${target.offsetHeight*ratio}px` };
};


const ScrollBars: React.FC = () => {
  const [scrollThumbStyle, setScrollThumbStyle] = useState({top:'0', height:'0'});
  const throttledSetScrollThumbStyle = throttle(setScrollThumbStyle, 100);
  return (
    <article style={{height: '100vh', width: '100vw'}}>
      <div style={{height: '100%', display: 'flex'}}>

        <div style={{height: '100%',  overflowY: 'hidden', paddingRight: '1rem', flexShrink: 0}}>
          <div style={{height: '100%', width: '300px', overflowY: 'scroll',  overscrollBehavior: 'contain'}}>
            <FakeContent prefix="パターン1(標準)"/>
          </div>
        </div>

        <div style={{height: '100%',  overflowY: 'hidden', flexShrink: 0}}>
          <div onScroll={e=>{
            const style = calcThumbStyle(e.currentTarget);
            throttledSetScrollThumbStyle(style);
          }} className={styles['scroll-area']}>
            <div className={styles['scroll-thumb']} style={scrollThumbStyle}/>
            <FakeContent prefix="パターン2(カスタム))"/>
          </div>
        </div>

        <div style={{height: '100%',  width: '300px', flexShrink: 0}}>
        </div>

      </div>
    </article>
  ); };
export default ScrollBars;