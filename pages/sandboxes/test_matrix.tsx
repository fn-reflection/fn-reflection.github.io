import { useState } from 'react';

const codeTypes = ['base64', 'binary'] as const;
type CodeType = typeof codeTypes[number];

const identityString = (s: string)=>s;
const encodeDispatcher: (args:Readonly<{codeType: CodeType}>)=>((data:string)=>string) = ({codeType}) =>{
  switch(codeType){
    case 'base64':
      return btoa;
  }
  return identityString;
};

const decodeDispatcher: (args:Readonly<{codeType: CodeType}>)=>((data:string)=>string) = ({codeType}) =>{
  switch(codeType){
    case 'base64':
      return atob;
  }
  return identityString;
};

const ScrollBars: React.FC = () => {
  const [decoded, setDecoded] = useState('');
  const [encoded, setEncoded] = useState('');
  const [codeType, setCodeType] = useState<CodeType>('base64');
  const onEncode=()=>{
    const encoder = encodeDispatcher({codeType});
    setEncoded(encoder(decoded));    
  };
  const onDecode = ()=>{
    const decoder = decodeDispatcher({codeType});
    setDecoded(decoder(encoded));    
  };

  return (
    <main style={{height: '100vh', width: '100vw', padding: '1rem'}}>
      <div style={{display: 'flex', height: '5%', padding: '0.5rem', justifyContent:'center', alignItems:'center'}}>
        <span style={{paddingRight: '0.5rem'}}>encoding type: </span>
        <select value={codeType} onChange={e=>setCodeType(e.target.value as CodeType)}>
          {codeTypes.map(c=>(
            <option key={c} value={c} style={{padding: '0.5rem'}}>
              {c}            
            </option>
          ))}
        </select>
      </div>
    </main>
  ); };
export default ScrollBars;

