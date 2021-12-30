import React from 'react';
import styles from './RegistrationForm/RegistrationForm.module.css';

export const FormErrors = ({ formErrors }) => (
  <div className={styles.inputErrorText}>{formErrors}</div>
);
