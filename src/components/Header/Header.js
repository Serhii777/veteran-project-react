import React, {useContext} from "react";
import authContext from "../../services/authContext";


import AdminInfoHeader from "../AdminInfoHeader/AdminInfoHeader";
import Logo from "../Logo/Logo";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
// import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.css";

const Header = () => {
  const auth = useContext(authContext);

  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>

        {auth.isAuthenticated ? (
          <div className={styles.adminInfoWrapper}>
            <AdminInfoHeader />
          </div>
        ) : null}
        <div className={styles.headerBlockWrapper}>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>
          <div className={styles.headerTitleWrapper}>
            <HeaderTitle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
