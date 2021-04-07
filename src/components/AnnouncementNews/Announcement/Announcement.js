import React from "react";

import imageExample1 from "../../../images/webp-chto-za-format.jpg";

import styles from "./Announcement.module.css";

const Announcement = () => {
  return (
    <div className={styles.announcementWrapper}>
      <h2 className={styles.announcementTitle}>Анонси заходів</h2>
      <div className={styles.announcementListWrapper}>
        <ul className={styles.announcementList}>
          <li className={styles.announcementItem}>
            <div className={styles.announcementItemWrapper}>
              <h5 className={styles.itemTitle}>Контекст</h5>
              <p className={styles.itemDescription}>
                Контекст позволяет передавать данные через дерево компонентов
                без необходимости передавать пропсы на промежуточных уровнях.
              </p>
              <img
                src={imageExample1}
                alt="Картинка"
                className={styles.itemImage}
              />
              <p className={styles.itemText}>
                В типичном React-приложении данные передаются сверху вниз (от
                родителя к дочернему компоненту) с помощью пропсов. Однако,
                подобный способ использования может быть чересчур громоздким для
                некоторых типов пропсов (например, выбранный язык, UI-тема),
                которые необходимо передавать во многие компоненты в приложении.
                Контекст предоставляет способ делиться такими данными между
                компонентами без необходимости явно передавать пропсы через
                каждый уровень дерева. Когда использовать контекст Перед тем,
                как вы начнёте использовать контекст API React.createContext
                Context.Provider Class.contextType Context.Consumer
                Context.displayName Примеры Динамический контекст Изменение
                контекста из вложенного компонента Использование нескольких
                контекстов Предостережения Устаревший API
              </p>
              <span className={styles.itemData}>07.04.2021</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Announcement;
