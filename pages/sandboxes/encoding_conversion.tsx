import { useState } from 'react';

const codeTypes = ['base64', 'binary'] as const;
type CodeType = typeof codeTypes[number];

const identityString = (s: string)=>s;
const encodeDispatcher: (args:Readonly<{codeType: CodeType}>)=>((str:string)=>string) = ({codeType}) =>{
  switch(codeType){
    case 'base64':
      return (str) => Buffer.from(str, 'utf8').toString('base64');
  }
  return identityString;
};

const decodeDispatcher: (args:Readonly<{codeType: CodeType}>)=>((base64Str:string)=>string) = ({codeType}) =>{
  switch(codeType){
    case 'base64':
      return (base64Str)=> (new TextDecoder()).decode(Buffer.from(base64Str, 'base64'));
  }
  return identityString;
};

const EncodingConversion = (): JSX.Element => {
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
      <div style={{height: '95%', display: 'flex'}}>
        <div style={{height: '100%',  flexShrink: 0}}>
          <div style={{textAlign: 'center'}}>encoded</div>
          <div style={{height: '100%', overflowY: 'hidden'}}>
            <textarea value={encoded} onChange={e=>setEncoded(e.target.value)} style={{height: '100%', width: '40vw', overflowY: 'scroll',  overscrollBehavior: 'contain', fontSize: '1rem'}} / >
          </div>
        </div>
        <div style={{display: 'flex', width: '20vw', paddingLeft: '1rem', paddingRight: '1rem', flexDirection: 'column', justifyContent: 'center', gap: '1rem'}}>
          <button onClick={onDecode}>decode →</button>
          <button style={{marginBottom: '1rem'}} onClick={onEncode}>← encode</button>
        </div>
        <div style={{height: '100%',  flexShrink: 0}}>
          <div style={{textAlign: 'center'}}>decoded</div>
          <div style={{height: '100%',  overflowY: 'hidden'}}>
            <textarea value={decoded} onChange={e=>setDecoded(e.target.value)} style={{height: '100%', width: '40vw', overflowY: 'scroll',  overscrollBehavior: 'contain', fontSize: '1rem'}} />
          </div>
        </div>

      </div>
    </main>
  ); };
export default EncodingConversion;
