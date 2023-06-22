import dynamic from 'next/dynamic';
import { useState } from 'react';

const LongContent = () => (
  <div style={{ width: '30rem', height: '100rem', border: '0.25rem solid black', backgroundColor: '#def'}} >
  </div>
);

const ModalNoSsr = dynamic(
  async () => {
    return (await import('../../components/Modal')).Modal;
  },
  { ssr: false }
);

const TestModal = (): JSX.Element => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div>
      {showModal && <ModalNoSsr {...{ modalContent:<LongContent />, closeModal: () => { setShowModal(false); } }} />}
      <LongContent />

    </div>
  ); };
export default TestModal;
