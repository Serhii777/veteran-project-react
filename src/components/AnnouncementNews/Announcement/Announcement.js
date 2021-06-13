import React from "react";

import imageExample1 from "../../../images/art_show-gallery.jpg";
import imageExample2 from "../../../images/art_show-painter.jpg";

import styles from "./Announcement.module.css";

const Announcement = () => {
  return (
    <div className={styles.announcementWrapper}>
      <h2 className={styles.announcementTitle}>Анонси заходів</h2>
      
      <div className={styles.announcementListWrapper}>
        <ul className={styles.announcementList}>
          <li className={styles.announcementItem}>
            <div className={styles.announcementItemWrapper}>
              <h5 className={styles.itemTitle}>Увага! Контекст</h5>
              <p className={styles.itemDescription}>
                Контекст позволяет передавать данные через дерево компонентов
                без необходимости передавать пропсы на промежуточных уровнях.
              </p>
              <div className={styles.contentWrapper}>
                <p className={styles.itemText}>
                  В типичном React-приложении данные передаются сверху вниз (от
                  родителя к дочернему компоненту) с помощью пропсов. Однако,
                  подобный способ использования может быть чересчур громоздким
                  для некоторых типов пропсов (например, выбранный язык,
                  UI-тема), которые необходимо передавать во многие компоненты в
                  приложении. Контекст предоставляет способ делиться такими
                  данными между компонентами без необходимости явно передавать
                  пропсы через каждый уровень дерева. Когда использовать
                  контекст Перед тем, как вы начнёте использовать контекст API
                  React.createContext Context.Provider Class.contextType
                  Context.Consumer Context.displayName Примеры Динамический
                  контекст Изменение контекста из вложенного компонента
                  Использование нескольких контекстов Предостережения Устаревший
                  API. Когда использовать контекст Контекст разработан для
                  передачи данных, которые можно назвать «глобальными» для всего
                  дерева React-компонентов (например, текущий
                  аутентифицированный пользователь, UI-тема или выбранный язык).
                  В примере ниже мы вручную передаём проп theme, чтобы
                  стилизовать компонент Button:
                  
                    Перед тем, как вы начнёте использовать контекст Обычно
                    контекст используется, если необходимо обеспечить доступ
                    данных во многих компонентах на разных уровнях вложенности.
                    По возможности не используйте его, так как это усложняет
                    повторное использование компонентов. Если вы хотите
                    избавиться от передачи некоторых пропсов на множество
                    уровней вниз, обычно композиция компонентов является более
                    простым решением, чем контекст. Например, давайте рассмотрим
                    компонент Page, который передаёт пропсы user и avatarSize на
                    несколько уровней вниз, чтобы глубоко вложенные компоненты
                    Link и Avatar смогли их использовать.
                  
                </p>
                <img
                  src={imageExample1}
                  alt="Картинка"
                  className={styles.itemImage}
                />
                <img
                  src={imageExample2}
                  alt="Картинка"
                  className={styles.itemImage}
                />
              </div>
              <span className={styles.itemData}>07.04.2021</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Announcement;
