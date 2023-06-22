import { useEffect } from 'react';
import styles from './Modal.module.scss';

// https://github.com/ics-creative/220620_fixed_scrolling/blob/main/src/demo02/logics/scrollLock.ts
function scrollLock(event: TouchEvent) {
  const elementInModal = (event.target as HTMLDivElement)?.closest(`.${styles.modal}`);
  if (elementInModal === null) { // モーダル外の要素
    event.preventDefault(); // スクロールを防ぐ
  } else {
    if (elementInModal.clientHeight < elementInModal.scrollHeight) {
      event.stopPropagation(); // スクロール可能、バブリングを防ぐ
    } else {
      event.preventDefault(); // スクロール不要、スクロール処理を防ぐ
    }
  }
}

// スクロール範囲を1px内側に制限し、追加スクロールバグを抑止する(for iOS Safari)
// https://github.com/ics-creative/220620_fixed_scrolling/blob/main/src/demo02/logics/scrollLockFix.ts
function limitScrollRange(modal: HTMLDivElement) {
  if (modal.scrollTop + modal.clientHeight === modal.scrollHeight) {
    modal.scrollTop = modal.scrollTop - 1;
  }
  if (modal.scrollTop === 0) {
    modal.scrollTop = 1;
  }
  console.log(modal);
}

type Props = {
  modalContent: JSX.Element,
  closeModal: () => void
}

export const Modal = ({ modalContent, closeModal }:Props): JSX.Element => {
  useEffect(() => {
    function limitScrollRangeOfModal() {
      const modal = document.querySelector<HTMLDivElement>(`.${styles.modal}`);
      if (modal === null) return;
      limitScrollRange(modal);
    }

    const modal = document.querySelector<HTMLDivElement>(`.${styles.modal}`);
    if (modal === null) return;
    // document.body.style.overflowY = 'hidden'; // for PC
    modal?.addEventListener('scroll', limitScrollRangeOfModal); // for iOS Safari
    document.addEventListener('touchmove', scrollLock, { passive: false }); // for iOS Safari

    return () => {
      // document.body.style.overflowY = 'auto'; // for PC
      modal?.removeEventListener('scroll', limitScrollRangeOfModal); // for iOS Safari
      document.removeEventListener('touchmove', scrollLock); // for iOS Safari
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
