import React from "react";
import { connect } from "react-redux";
// import { authOperations, authSelectors } from '../../redux/auth';
import { authSelectors } from '../../redux/auth';


import AdminInfoHeader from "../AdminInfoHeader/AdminInfoHeader";
import Logo from "../Logo/Logo";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
// import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.css";

const Header = ({ isAuthenticated }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        {/* <h1>Hello from Header</h1> */}

        {isAuthenticated ? (
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

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticatedToken(state),
});

export default connect(mapStateToProps)(Header);
