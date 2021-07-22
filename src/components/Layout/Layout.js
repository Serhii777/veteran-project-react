import React from "react";
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';

import ReactNotification from "react-notifications-component";
// import 'react-notifications-component/dist/theme.css'

import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutWrapper}>
      <ReactNotification />
      <header className={styles.headerWtapper}>
        <div className={styles.container}>
          <Header />
        </div>
      </header>
      <main className={styles.mainWtapper}>
        <div className={styles.container}>
          <Main>{children}</Main>
        </div>
      </main>
      <footer className={styles.footerWtapper}>
        <div className={styles.container}>
          <Footer />
        </div>
      </footer>
    </div>
  );
}
