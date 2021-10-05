import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../../images/logo/logo726-726.jpg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.headerLogo}>
        <img
          src={logo}
          alt="Ветеранський простір"
          className={styles.imgLogo}
          aria-label="ветеранський простір"
        />
      </Link>
    </div>
  );
}
