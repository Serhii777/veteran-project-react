import React, { useState, useRef } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FocusLock from "react-focus-lock";

// import Navbar from "../Navbar/Navbar";
import { useOnClickOutside } from "../Navigation/useOnClickHooks";
import Burger from "../Navigation/Burger";
import Navigation from "../Navigation/Navigation";

import styles from "./Main.module.css";

const Main = ({ children }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  // const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className={styles.main}>
      <div ref={node} className={styles.navWrapper}>
        <FocusLock disabled={!open}>
          {/* <Navbar> */}
          {/* <Burger open={open} setOpen={setOpen} aria-controls={menuId} /> */}
          <Burger open={open} setOpen={setOpen} />
          {/* <Navigation open={open} setOpen={setOpen} id={menuId} /> */}
          <Navigation open={open} setOpen={setOpen} />
          {/* </Navbar> */}
        </FocusLock>
      </div>
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  );
};

export default Main;
