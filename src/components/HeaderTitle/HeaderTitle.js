import React from "react";

import styles from "./HeaderTitle.module.css";

const HeaderTitle = () => {
  return (
    <div className={styles.headerTitleWrapper}>
      <h3 className={styles.headerTitle}>Hello from HeaderTitle</h3>

      <div className={styles.headerTextWrapper}>
        <h4 className={styles.headerText}>Основные хуки</h4>
        <p className={styles.headerDescription}>
          Контекст позволяет передавать данные через дерево компонентов без
          необходимости передавать пропсы на промежуточных уровнях.
        </p>
      </div>
    </div>
  );
};

export default HeaderTitle;
