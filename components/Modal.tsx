import { useEffect } from 'react';
import styles from './Modal.module.scss';

type Props = {
  modalContent: JSX.Element,
  closeModal: () => void
}

export const Modal = ({ modalContent, closeModal }:Props): JSX.Element => {
  useEffect(() => {
    const prevScrollTop = window.scrollY;
    document.body.style.top = `-${prevScrollTop}px`; // for Safari
    document.body.classList.add(styles['scroll-lock']);
    return () => {
      document.body.classList.remove(styles['scroll-lock']);
      document.body.style.top = '';
      window.scrollTo({top: prevScrollTop });
    };
  }, []);
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
