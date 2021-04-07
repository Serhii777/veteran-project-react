import React from 'react';
import styles from './form.module.css';

export const FormErrors = ({ formErrors }) => (
  <div className={styles.inputErrorText}>{formErrors}</div>
);
