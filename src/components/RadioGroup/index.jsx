import React from 'react';
import styles from './styles.module.css';
export default function RadioGroup({ label, label_dec, children }) {
  return (
    <fieldset className={styles.input_wrap}>
      <legend className={styles.radio_header}>
        {label}
        <br /> <p className={styles.header_desc}>{label_dec}</p>
      </legend>

      {children}
    </fieldset>
  );
}