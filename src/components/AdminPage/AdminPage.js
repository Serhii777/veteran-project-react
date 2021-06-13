import React, { useContext } from "react";
import { Route, NavLink } from "react-router-dom";

import authContext from "../../services/authContext";

import HomePage from "../HomePage/HomePage";
import LoginForm from "../Auth/LoginForm/LoginForm";
import RegistrationForm from "../Auth/RegistrationForm/RegistrationForm";

import styles from "./AdminPage.module.css";

const AdminPage = () => {
  const auth = useContext(authContext);

  // console.log("authAdminPage:", auth);

  return (
    <div className={styles.adminPage}>
      {auth.isAuthenticated ? (
        <HomePage />
      ) : (
        <div className={styles.adminPageWrapper}>
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
      )}
    </div>
  );
};

export default AdminPage;
