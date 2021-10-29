import React, {
  //  useContext,
   useState, useRef } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FocusLock from "react-focus-lock";
// import authContext from "../../services/authContext";


// import Navbar from "../Navbar/Navbar";
import { useOnClickOutside } from "../Navigation/useOnClickHooks";
import Burger from "../Navigation/Burger";
import Navigation from "../Navigation/Navigation";
import ButtonUp from "../ButtonGoTop/ButtonUp";

import styles from "./Main.module.css";

const Main = ({ children }) => {
  // const auth = useContext(authContext);

  const [open, setOpen] = useState(false);
  const node = useRef();

  // const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className={styles.main}>
{}

      <div ref={node} className={styles.navWrapper}>
        <FocusLock disabled={!open}>
          {/* <Navbar> */}
          {/* <Burger open={open} setOpen={setOpen} aria-controls={menuId} /> */}
          <div className={styles.navBurgerWrapper}>
            <Burger open={open} setOpen={setOpen} />
            {/* <Navigation open={open} setOpen={setOpen} id={menuId} /> */}
            <Navigation open={open} setOpen={setOpen} />
            {/* </Navbar> */}
          </div>
        </FocusLock>
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
