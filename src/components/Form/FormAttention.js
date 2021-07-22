import React, { useCallback, useState, useEffect } from "react";

import Button from "../Button/Button";
import { createAttentionitem } from "../../services/useFetchAttention";

import { store } from "react-notifications-component";
import styles from "./FormAttention.module.css";

const FormHeader = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [isAddDisabled, setIsAddDisabled] = useState(true);

  const handleTitleChange = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );

  const handleDescriptionChange = useCallback(
    (e) => {
      setDescription(e.target.value);
    },
    [setDescription]
  );

  const handleTextChange = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    createAttentionitem({ title, description, text }).then(() => {
      store.addNotification({
        title: "Wonderful!",
        type: "success",
        message: "Введені дані успішно збереженні в базу даних.",
        container: "top-left",
        animationIn: ["animate__animated animate__zoomIn"],
        animationOut: ["animate__animated animate__zoomOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
          showIcon: true,
        },
        // slidingExit: {
        //   duration: 800,
        //   timingFunction: "ease-out",
        //   delay: 0,
        // },
      });
    });
  };

  useEffect(() => {
    setIsAddDisabled(title === "" || description === "" || text === "");
  }, [title, description, text]);

  return (
    <form onSubmit={handleSubmit} className={styles.formAttention}>
      <h4 className={styles.formAttentionTitle}>Форма для введення даних</h4>

      <div className={styles.formDataWrapper}>
        <label htmlFor="titlePict" className={styles.formDataLabel}>
          Заголовок:
        </label>
        <input
          onChange={handleTitleChange}
          type="text"
          value={title}
          className={styles.formDataInput}
          placeholder="Ваша назва"
          id="titlePict"
        />
      </div>
      <div className={styles.formDataWrapper}>
        <label htmlFor="desc" className={styles.formDataLabel}>
          Короткий опис:
        </label>
        <textarea
          onChange={handleDescriptionChange}
          type="text"
          value={description}
          className={styles.formDataInputDesc}
          placeholder="Ваш опис"
          id="desc"
        />
      </div>
      <div className={styles.formDataWrapper}>
        <label htmlFor="desc" className={styles.formDataLabel}>
          Текстуальна частина:
        </label>
        <textarea
          onChange={handleTextChange}
          type="text"
          value={text}
          className={styles.formDataTextarea}
          placeholder="Ваш опис"
          id="desc"
        />
      </div>

      <div className={styles.buttonSubmitWrapper}>
        <div className={styles.buttonSubmit}>
          <Button
            title={"Завантажити дані"}
            type={"submit"}
            disabled={isAddDisabled}
          />
        </div>
      </div>
    </form>
  );
};

export default FormHeader;
