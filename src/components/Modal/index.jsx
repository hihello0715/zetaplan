import React from 'react';
import styles from './styles.module.css';

export default function Modal({ targetName, updateActiveModal }) {
  return (
    <>
      <div className={`${styles.bg_wrapper} flex_center`}>
        <div
          className={styles.back_area}
          onClick={() => {
            updateActiveModal(false);
          }}></div>
        <div className={`${styles.modal_wrap} flex_center`}>
          관리자인데용?? + {targetName}
        </div>
      </div>
    </>
  );
}
