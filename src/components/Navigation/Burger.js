import React from "react";
import { bool, func } from "prop-types";

import styles from "./Burger.module.css";

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  return (
    <button
      open={open}
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      onClick={() => {
        if (document.documentElement.clientWidth < 768) {
          setOpen(!open);
        }
      }}
      {...props}
      className={
        open === true
          ? `${styles.burger} ${styles.burgerDark}`
          : `${styles.burger} ${styles.burgerLight}`
      }>
      <span
        className={
          open === true
            ? `${styles.burgerSpan} ${styles.spanRotate}`
            : `${styles.burgerSpan} ${styles.spanStayed}`
        }
      />
      <span
        className={
          open === true
            ? `${styles.burgerSpan} ${styles.spanRotate}`
            : `${styles.burgerSpan} ${styles.spanStayed}`
        }
      />
      <span
        className={
          open === true
            ? `${styles.burgerSpan} ${styles.spanRotate}`
            : `${styles.burgerSpan} ${styles.spanStayed}`
        }
      />
    </button>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
