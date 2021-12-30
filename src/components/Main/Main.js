import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../Navigation/useOnClickHooks";
import Burger from "../Navigation/Burger";
import Navigation from "../Navigation/Navigation";
import ButtonUp from "../ButtonGoTop/ButtonUp";

import styles from "./Main.module.css";

const Main = ({ children }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className={styles.main}>
      <div ref={node} className={styles.navWrapper}>
        <div className={styles.navBurgerWrapper}>
          <Burger open={open} setOpen={setOpen} />
          <Navigation open={open} setOpen={setOpen} />
        </div>
      </div>
      <div className={styles.childrenWrapper}>
        {children}
        <div className={styles.buttonUpWrapper}>
          <ButtonUp />
        </div>
      </div>
    </div>
  );
};

export default Main;
