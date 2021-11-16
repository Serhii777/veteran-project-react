import React, { useContext } from "react";
import { Link } from "react-router-dom";
import authContext from "../../services/authContext";

import AdminInfoHeader from "../AdminInfoHeader/AdminInfoHeader";
import Logo from "../Logo/Logo";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import SvgGoToAdmin4Color from "../SvgComponents/SvgGoToAdmin4Color";

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

          {document.documentElement.clientWidth > 768 && (
            <div className={styles.linkAdminButtonWrapper}>
              <Link to="/admin" className={styles.linkHome}>
                <button type="button" className={styles.adminButton}>
                  <SvgGoToAdmin4Color />
                  <div className={styles.tooltipDiv}>
                    Перейти на адміністративну частину сайту.
                  </div>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
