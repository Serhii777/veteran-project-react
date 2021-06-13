import React, { useContext, useState, useEffect } from "react";

import authContext from "../../services/authContext";

// import { submit } from "redux-form";

import styles from "./HeaderTitle.module.css";


const HeaderTitle = () => {
  const auth = useContext(authContext);

  const [title, setTitle] = useState(() =>
    window.localStorage.getItem("title" || "")
  );
  // const [title, setTitle] = useState("Це основний заголовок шапки");
  const [description, setDescription] = useState(() =>
    window.localStorage.getItem("description" || "")
  );

  const [text, setText] = useState(() =>
    window.localStorage.getItem("text" || "")
  );

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("title", title);
    window.localStorage.setItem("description", description);
    window.localStorage.setItem("text", text);
  });

  return (
    <div className={styles.headerTitleWrapper}>
      <div className={styles.headerTextWrapper}>
        <h3 className={styles.headerTitle}>{title}</h3>
        <p className={styles.headerDescription}>{description}</p>
        <p className={styles.headerText}>{text}</p>
      </div>

      {auth.isAuthenticated ? (
        <div className={styles.formAdminWrapper}>
          <form>
            <label>
              Змінити заголовок:
              <input value={title} onChange={handleTitleChange} />
            </label>
            <label>
              Змінити короткий опис:
              <input value={description} onChange={handleDescriptionChange} />
            </label>
            <label>
              Змінити текст:
              <input value={text} onChange={handleTextChange} />
            </label>
            {/* <button type={submit}>Зберегти зміни</button> */}
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default HeaderTitle;
