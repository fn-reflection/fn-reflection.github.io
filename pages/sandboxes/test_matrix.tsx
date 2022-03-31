import { useState } from 'react';
import { RenderNewLines } from '../../components/RenderNewLines';
const ScrollBars: React.FC = () => {
  const [str, setStr] = useState('');
  return (
    <main style={{height: '100vh', width: '100vw', padding: '1rem'}}>
      <textarea value={str} onChange={(event)=>{ setStr(event.target.value); }}/>
      <RenderNewLines rawString={str}/>
    </main>
  ); };
export default ScrollBars;

