import dynamic from 'next/dynamic';
import { useState } from 'react';

const LongContent = () => (
  <div style={{ width: '20rem', height: '100rem', border: '0.25rem solid black', backgroundColor: '#def'}} />
);

const LongContent2 = () => (
  <div style={{ width: '200rem', height: '10rem', border: '0.25rem solid black', backgroundColor: '#def'}} />
);

const ModalNoSsr = dynamic(
  async () => {
    return (await import('../../components/Modal')).Modal;
  },
  { ssr: false }
);

const TestModal = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <LongContent2 />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
        {showModal && <ModalNoSsr {...{ modalContent: <LongContent />, closeModal: () => { setShowModal(false); } }} />}
        <div style={{display: 'flex'}}>
          <LongContent />
          <button onClick={()=>setShowModal(true)}>Modal生成</button>
        </div>
      </div>
    </div>
  ); };
export default TestModal;
