import React, { useContext } from "react";
import { Route, NavLink, Link } from "react-router-dom";

import authContext from "../../services/authContext";

import HomePage from "../HomePage/HomePage";
import LoginForm from "../Auth/LoginForm/LoginForm";
import RegistrationForm from "../Auth/RegistrationForm/RegistrationForm";

import styles from "./AdminPage.module.css";

const AdminPage = () => {
  const auth = useContext(authContext);

  return (
    <div className={styles.adminPage}>
      {auth.isAuthenticated ? (
        <HomePage />
      ) : (
        <div className={styles.adminPageWrapper}>
          <div className={styles.adminPageContainer}>
            <div className={styles.homeButtonWrapper}>
              <div className={styles.linkHomeButtonWrapper}>
                <Link to="/" className={styles.linkHome}>
                  <button type="button" className={styles.homeButton}>
                    &#8634;
                    <div className={styles.tooltipDiv}>
                      Повернутись на головну сторінку.
                    </div>
                  </button>
                </Link>
              </div>
            </div>

            <h2 className={styles.adminPageTitle}>
              Адміністративна частина сайту
            </h2>
            <ul className={styles.adminPageList}>
              <li className={styles.adminPageItem}>
                <NavLink
                  to="/admin/login"
                  className={styles.link}
                  activeClassName={styles.activelink}>
                  Вхід
                </NavLink>
              </li>
              <li className={styles.adminPageItem}>
                <NavLink
                  to="/admin/register"
                  className={styles.link}
                  activeClassName={styles.activelink}>
                  Реєстрація
                </NavLink>
              </li>
            </ul>

            <Route path="/admin/login" component={LoginForm} />
            <Route path="/admin/register" component={RegistrationForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
