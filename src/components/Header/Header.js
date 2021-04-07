import React from "react";
import Logo from "../Logo/Logo";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
// import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        {/* <h1>Hello from Header</h1> */}

        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.headerTitleWrapper}>
          <HeaderTitle />
        </div>
      </div>
      {/* <Navigation /> */}
    </div>
  );
};

export default Header;
