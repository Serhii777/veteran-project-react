import React, {
  //  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import FocusLock from "react-focus-lock";
// import authContext from "../../services/authContext";

// import Navbar from "../Navbar/Navbar";
import { useOnClickOutside } from "../Navigation/useOnClickHooks";
import Burger from "../Navigation/Burger";
// import Navigation from "../Navigation/Navigation";
import NavigationJeka from "../Navigation/NavigationJeka";
import ButtonUp from "../ButtonGoTop/ButtonUp";

import styles from "./Main.module.css";

const Main = ({ children }) => {
  // const auth = useContext(authContext);

  const [open, setOpen] = useState(false);
  const node = useRef();

  // const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  //!  ================ Scroll =======================================================================
  useEffect(() => {
    // Метрики элементов на странице

    // Получаем объект
    const divNavWrapper = document.getElementsByTagName("nav")[0];
    const blockNavWrapper = document.querySelector(".Main_navWrapper__3SYqt");
    const blockNavBurgerWrapper = document.querySelector(
      ".Main_navBurgerWrapper__3iQNN"
    );

    // Позиция объекта
    // Свойства offsetParent, offsetLeft и offsetTop

    // Получаем родительский элемент
    // относительно которого позицианирован наш объект
    const elementOffsetParent = divNavWrapper.offsetParent;

    /*
  Это будет ближайший предок, который
  удовлетворяет следующим условиям:
  
  1. Является CSS-позиционированным
	(CSS-свойство position равно absolute, relative, fixed или sticky)
  2. или теги <td>, <th>, <table>,
  3. или <body>.
  */

    // console.log("divNavWrapper: ", divNavWrapper);
    // console.log("blockNavWrapper: ", blockNavWrapper);
    // console.log("blockNavBurgerWrapper: ", blockNavBurgerWrapper);
    // console.log("elementOffsetParent: ", elementOffsetParent);
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div className={styles.main}>
      {}

      <div ref={node} className={styles.navWrapper}>
        {/* <FocusLock disabled={!open}> */}
        {/* <FocusLock > */}
          {/* <Navbar> */}
          {/* <Burger open={open} setOpen={setOpen} aria-controls={menuId} /> */}
          <div className={styles.navBurgerWrapper}>
            <Burger open={open} setOpen={setOpen} />
            {/* <Navigation open={open} setOpen={setOpen} id={menuId} /> */}
            {/* <Navigation open={open} setOpen={setOpen} /> */}
            <NavigationJeka open={open} setOpen={setOpen} />
            {/* </Navbar> */}
          </div>
        {/* </FocusLock> */}
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
