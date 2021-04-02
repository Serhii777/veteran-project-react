import React from "react";
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';

import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
  //   const token = useSelector(authSelectors.getToken);

  return (
    // <div
    //   className={styles.container}
      //<div className={token ? styles.container : `${styles.container} ${styles.bg}`}
    // >
    //   {children}
    // </div>

    <div className={styles.container}>
      <header className={styles.headerWtapper}>
        <Header />
      </header>
      <main className={styles.mainWtapper}>
        <Main>{children}</Main>
      </main>
      <footer className={styles.footerWtapper}>
        <Footer />
      </footer>
    </div>
  );
}
