import dynamic from 'next/dynamic';
import { useState } from 'react';

const LongContent = () => (
  <div style={{ width: '10rem', height: '100rem', border: '0.25rem solid black', backgroundColor: '#def'}} >
  </div>
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
      {showModal && <ModalNoSsr {...{ modalContent: <LongContent />, closeModal: () => { setShowModal(false); } }} />}
      <div style={{display: 'flex'}}>
        <LongContent />
        <button onClick={()=>setShowModal(true)}>Modal生成</button>
      </div>
    </div>
  ); };
export default TestModal;
