import React from "react";
import { Link } from "react-router-dom";

import styles from "./Attention.module.css";

const Attention = () => {
  return (
    <div className={styles.attention}>
      <div className={styles.attentionWrapper}>
        <h3 className={styles.attentionTitle}>Увага! Термінова інформація</h3>

        <div className={styles.attentionNoteWrapper}>
          <h4 className={styles.attentionNoteTitle}>
            Обработка большого количества полей
          </h4>
          <p className={styles.attentionDescription}></p>
          <p className={styles.attentionText}>
            Поля ввода. Текстовые области. Радиокнопки и чекбоксы. Вот некоторые
            из основных точек взаимодействия, которые мы, как разработчики,
            имеем с нашими пользователями. Мы размещаем их на сайте,
            пользователи их заполняют и если нам повезёт, то заполненные формы
            приходят к нам без ошибок валидации...
            <Link
              to="/announcementnews/announcement"
              className={styles.attentionLink}>
              <span className={styles.attentionSpan}>Читати далі</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Attention;

// className={styles.buttonRegistration}>
//                 <Button title={"Реєстрація"} role={"link"} />
