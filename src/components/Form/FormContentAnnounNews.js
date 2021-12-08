import React, { useState, useRef } from "react";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

import Button from "../Button/Button";

import { store } from "react-notifications-component";

import styles from "./FormContent.module.css";

const FormContent = ({ URL, onCreateItem }) => {
  const [alert, setAlert] = useState(false);
  const [list, setList] = useState([]);

  const mounted = useRef(true);

  const onSubmit = (values) => {
    console.log("valuesOnSubmit:", values);

    onCreateItem(URL, values).then(() => {
      if (mounted.current) {
        setList(list);
        setAlert(true);
        store.addNotification({
          title: "Wonderful!",
          type: "success",
          message: "Введені дані успішно збереженні в базу даних.",
          container: "top-right",
          animationIn: ["animate__animated animate__zoomIn"],
          animationOut: ["animate__animated animate__zoomOut"],
          dismiss: {
            duration: 3000,
            onScreen: true,
            showIcon: true,
          },
        });
      }
    });
  };

  return (
    <div className={styles.formAdminWrapper}>
      <h4 className={styles.formAdminTitle}>Форма для введення даних</h4>

      <Form
        onSubmit={onSubmit}
        enctype="multipart/form-data"
        mutators={{
          ...arrayMutators,
        }}
        render={({
          handleSubmit,
          form: {
            mutators: { push, pop },
          },
          pristine,
          form,
          submitting,
          values,
        }) => {
          return (
            <form onSubmit={handleSubmit} className={styles.formContent}>
              <div className={styles.formContentTitleWrapper}>
                <label className={styles.formContentLabel}>
                  Заголовок статті:
                </label>
                <Field
                  name="title"
                  component="input"
                  className={styles.inputFormContentTitle}
                  placeholder="Ваш заголовок *"
                  required
                />
              </div>
              <div className={styles.formContentTitleWrapper}>
                <label className={styles.formContentLabel}>
                  Дата проведення:
                </label>
                <Field
                  name="date"
                  type="date"
                  component="input"
                  className={styles.inputFormContentTitle}
                  placeholder="Ваша дата *"
                  required
                />
              </div>
              <div className={styles.formButtonWrapper}>
                <div className={styles.formButtonAdd}>
                  <button
                    type="button"
                    onClick={() => push("contentText", undefined)}
                    className={styles.formButton}>
                    Добавити новий блок тексту
                  </button>
                </div>
                <div className={styles.formButtonDelete}>
                  <button
                    type="button"
                    onClick={() => pop("contentText")}
                    className={styles.formButton}>
                    Очистити поточний блок тексту
                  </button>
                </div>
              </div>
              <FieldArray name="contentText" className={styles.blockContent}>
                {({ fields }) =>
                  fields.map((name, index) => (
                    <div key={name} className={styles.blockContentWrapper}>
                      <div className={styles.blockTitleWrapper}>
                        <label className={styles.blockContentLabel}>
                          Заголовок блоку №{index + 1}
                        </label>
                        <Field
                          name={`${name}.textTitle`}
                          component="input"
                          placeholder="Ваш заголовок"
                          className={styles.blockTitle}
                        />
                      </div>
                      <div className={styles.blockToppingsWrapper}>
                        <label className={styles.blockContentLabel}>
                          Вибір символів
                        </label>
                        <Field
                          name={`${name}.toppings`}
                          component="select"
                          className={styles.blockToppings}>
                          <option value="">Choose value</option>
                          <option value="&#9745;">☑</option>
                          <option value="&#9989;">✅</option>
                          <option value="&#10003;">✓</option>
                          <option value="&#10004;">✔</option>
                          <option value="&#10145;">➡</option>
                          <option value="&#10146;">➢</option>
                          <option value="&#10147;">➣</option>
                          <option value="&#10148;">➤</option>
                          <option value="&#127916;">🎬</option>
                          <option value="&#127917;">🎭</option>
                          <option value="&#64;">@</option>
                          <option value="&#128231;">📧</option>
                          <option value="&#9993;">✉</option>
                          <option value="&#9749;">☕</option>
                          <option value="&#10071;">❗</option>
                          <option value="&#10067;">❓</option>
                          <option value="&#9888;">⚠</option>
                          <option value="&#9889;">⚡</option>
                          <option value="&#9742;">☎</option>
                          <option value="&#8981;">⌕</option>
                          <option value="&#128226;">📢</option>
                          <option value="&#10002;">✒</option>
                          <option value="&#9999;">✏</option>
                          <option value="&#9997;">✍</option>
                          <option value="&#128073;">👉</option>
                          <option value="&#9755;">☛</option>
                          <option value="&#128077;">👍</option>
                          <option value="&#9757;">☝️</option>
                          <option value="&#129330;">🤲</option>
                          <option value="&#129309;">🤝</option>
                          <option value="&#128591;">🙏</option>
                          <option value="&#128204;">📌</option>
                        </Field>
                      </div>
                      <div className={styles.blockTextareaWrapper}>
                        <label className={styles.blockContentLabel}>
                          Текстуальна частина №{index + 1}
                        </label>
                        <Field
                          name={`${name}.text`}
                          component="textarea"
                          wrap="soft"
                          spellcheck="true"
                          placeholder="Your text"
                          className={styles.blockTextarea}
                        />
                      </div>

                      <div className={styles.blockImageWrapper}>
                        <label className={styles.blockContentLabelImage}>
                          Картинка №{index + 1}
                        </label>
                        <Field
                          name={`${name}.image`}
                          component="input"
                          type="file"
                          accept="image/*,image/jpeg"
                          placeholder="Image"
                          id="inputGroupFile01"
                          className={styles.blockImage}
                        />
                      </div>

                      <div className={styles.blockLinkWrapper}>
                        <label className={styles.blockContentLabelLink}>
                          Посилання на джерело №{index + 1}
                        </label>
                        <Field
                          name={`${name}.link`}
                          component="input"
                          type="url"
                          placeholder="Посилання на джерело"
                          className={styles.blockLink}
                        />
                      </div>

                      <div className={styles.buttonRemoveWrapper}>
                        <button
                          onClick={() => fields.remove(index)}
                          className={styles.buttonRemove}>
                          ❌
                        </button>
                      </div>
                    </div>
                  ))
                }
              </FieldArray>

              <div className={styles.buttonSubmitWrapper}>
                <div className={styles.buttonSubmit}>
                  <Button
                    title={"Ввести нові дані"}
                    type={"submit"}
                    disabled={submitting || pristine}
                  />
                </div>
                <div className={styles.buttonReset}>
                  <Button
                    title={"Очистити форму"}
                    type={"button"}
                    disabled={submitting || pristine}
                    onClick={form.reset}
                  />
                </div>
              </div>
            </form>
          );
        }}
      />
    </div>
  );
};

export default FormContent;
