import styles from './Modal.module.scss';

type Props = {
  modalContent: JSX.Element,
  closeModal: () => void
}

export const Modal = ({ modalContent, closeModal }:Props): JSX.Element => {
  return (
    <div className={styles.modal}>
      <div className={styles.backdrop} onClick={() => closeModal()}/>
      <div className={styles.inner}>
        <div className={styles.close} onClick={() => closeModal()}><i className="fas fa-times" /></div>
        <div className={styles.body}>
          { modalContent }
        </div>
      </div>
    </div>
  );
};
