import React from "react";

import ReactNotification from "react-notifications-component";

import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutWrapper}>
      <ReactNotification />
      <header className={styles.headerWrapper}>
        <div className={styles.container}>
          <Header />
        </div>
      </header>
      <main className={styles.mainWrapper}>
        <div className={styles.container}>
          <Main>{children}</Main>
        </div>
      </main>
      <footer className={styles.footerWrapper}>
        <div className={styles.container}>
          <Footer />
        </div>
      </footer>
    </div>
  );
}
