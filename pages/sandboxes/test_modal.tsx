import dynamic from 'next/dynamic';
import { useState } from 'react';

const LongContent = ({ prefix }: { prefix: string }) => (
  <div style={{ width: '30rem', height: '100rem', border: '1px solid black', backgroundColor: '#def'}} >
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
      {showModal && <ModalNoSsr {...{ modalContent:<LongContent prefix="パターン2(NoSsr)" />, closeModal: () => { setShowModal(false); } }} />}
      <LongContent prefix="パターン1(標準)" />

    </div>
  ); };
export default TestModal;
