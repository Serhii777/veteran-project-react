import React from "react";
// import Container from "../components/Container";
import Attention from "../Attention/Attention";
import HomeContent from "../HomeContent/HomeContent";

import styles from "./HomePage.module.css";

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <Attention />
      <HomeContent />
    </div>
  );
};

export default Home;
