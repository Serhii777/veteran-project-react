import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Button from "../Button/Button";
import { authOperations, authSelectors } from "../../redux/auth";
import styles from "./AdminInfoHeader.module.css";

const AdminInfoHeader = ({ showName, onLogout, isAuthenticated }) => {
  console.log("showName: ", showName);
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    if (showName) {
      const abortController = new AbortController();
      setAdminName(showName, { signal: abortController.signal });

      return () => {
        abortController.abort();
      };
    }
  }, [showName]);

  console.log(("adminName: ", adminName));

  return isAuthenticated ? (
    <div className={styles.adminInfo}>
      <h4 className={styles.adminInfoTitle}>Адміністративна частина сайту</h4>
      <div className={styles.adminInfoWrapper}>
        <div className={styles.adminInfoWelcome}>
          <p className={styles.adminInfoHello}>Привіт
          <span className={styles.adminInfoSpan}> {adminName}!</span>
          </p>
          <p className={styles.adminInfoWelcomeText}>
            Що, хочеться попрацювати? Ну тоді вперед до роботи!
          </p>
          <ul className={styles.adminInfoList}>
            <li className={styles.adminInfoItem}>
              1. Знайди розділ, який потрібно змінити.
            </li>
            <li className={styles.adminInfoItem}>
              2. Заповни форму під цим розділом та натисни кнопку "Ввести нові
              дані".
            </li>
            <li className={styles.adminInfoItem}>
              3. Щоб побачити зміни перезавантаж сайт.
            </li>
            <li className={styles.adminInfoItem}>
              4. Неактуальні блоки з контентом видалити, натиснувши кнопку
              "Видалити елемент".
            </li>
            <li className={styles.adminInfoItem}>
              5. На сторінці має залишатись мінімум один блок з контентом.{" "}
            </li>
            <li className={styles.adminInfoItem}>
              6. Якщо і його потрібно видалити - спочатку створи новий блок з
              актуальним контентом, а потім видали непотрібний.
            </li>
            <li className={styles.adminInfoItem}>
              7. Для завантаження світлин на сайт - спочатку потрібно їх
              завантажити в базу даних.
            </li>
            <li className={styles.adminInfoItem}>
              8. Для цього внизу сторінки "Про наш простір" створено розділ
              завантаження світлин. У Формі завантаження зображення вибери
              потрібну світлину, заповни (по необхідності інформаційні дані по
              світлині) та натисни кнопку "Завантажити зображення". Світлина
              завантажена в базу даних та збережена в папці public
              (Frontend_Full_Stack_Offline2VN\WORKS\veteran_project\veteran-project-node\public\images).
            </li>
            <li className={styles.adminInfoItem}>
              9. Для розміщення збережених світлин на сайті, заповнюй відповідну
              форму на потрібній сторінці та завантажуй потрібну світлину із
              папки public
            </li>
            <li className={styles.adminInfoItem}>
              10. Якщо виникають якісь питання стосовно сайту - дзвони: 911 😃 в
              любий час дня та ночі.
            </li>
            {/* <li></li> */}
          </ul>
        </div>
        <div className={styles.adminInfoHeaderWrapper}>
          <p className={styles.adminInfoTextOut}>
            Памятай! По закінченню роботи, будь-ласка, натисни кнопочку "Вихід"!
          </p>
          <div className={styles.buttonHeaderWrapper}>
            <Link to={`/`} className={styles.buttonHeader}>
              <Button title={"Вихід"} onClick={onLogout} role={"link"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

// const mapStateToProps = (state) => ({
// // console.log("state: ",state)

//   showName: authSelectors.getUserName(state),
//   isAuthenticated: authSelectors.isAuthenticatedToken(state),
// });

const mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    showName: authSelectors.getUserName(state),
    isAuthenticated: authSelectors.isAuthenticatedToken(state),
  };
};

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminInfoHeader);
