import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import logo from '../../images/116353144_change-1.jpg';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.headerLogo}>
        <img src={logo} alt="" className={styles.imgLogo} />
      </Link>
    </div>
  );
}
