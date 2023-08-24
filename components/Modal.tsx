import { useEffect } from 'react';
import styles from './Modal.module.scss';
import {enableBodyScroll, disableBodyScroll} from 'body-scroll-lock';

type Props = {
  modalContent: JSX.Element,
  closeModal: () => void
}

export const Modal = ({ modalContent, closeModal }:Props): JSX.Element => {
  useEffect(() => {
    disableBodyScroll(document.getElementsByClassName(styles.modal)[0]);
    return () => { enableBodyScroll(document.getElementsByClassName(styles.modal)[0]); };
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
