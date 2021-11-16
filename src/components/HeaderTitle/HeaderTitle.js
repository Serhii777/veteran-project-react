import React from "react";
import styles from "./HeaderTitle.module.css";

const HeaderTitleNoChange = () => {
  return (
    <div className={styles.blockHeaderitemWrapper}>
      <div className={styles.headeritemList}>
        <div className={styles.headeritemItem}>
          <div className={styles.headeritemWrapper}>
            <h4 className={styles.headeritemTitle}>Ветеранський простір</h4>
            <p className={styles.headeritemDescription}>
              Міський освітньо-аналітичний центр допомоги ветеранам АТО/ООС,
              членам їх сімей та сім’ям загиблих
            </p>
            <p className={styles.headeritemText}>
              Спільний проєкт Громадської спілки “Координаційна рада учасників
              АТО/ООС та волонтерів м. Вінниці” та виконавчого комітету
              Вінницької міської ради.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTitleNoChange;
