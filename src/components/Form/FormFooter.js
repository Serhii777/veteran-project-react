// import React, { useCallback, useState, useEffect } from "react";
import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
// import { ErrorMessage } from '@hookform/error-message';

import Button from "../Button/Button";
// import { createContent } from "../../services/useFetchFooter";

import { store } from "react-notifications-component";
import styles from "./FormFooter.module.css";

const FormFooter = ({ onCreateItem }) => {
// console.log("createContent:", createContent);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log("dataOnSubmit:", data);

    onCreateItem(data)
      .then((response) => {
        console.log("response:", response);
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
        });
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  const onErrors = (errors) => console.error(errors);

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        address: "",
        schedule: "",
        hours: "",
        email: "",
        phone: "",
      });
    }, 150);
  }, [reset]);

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit, onErrors)}
      className={styles.formAttention}>
      <h4 className={styles.formAttentionTitle}>Форма для введення даних</h4>

      <div className={styles.formDataWrapper}>
        <label htmlFor="address" className={styles.formDataLabel}>
          Адреса:
        </label>
        <input
          name="address"
          placeholder="м. Вінниця, вул. Єрусалимка, 8"
          type="text"
          {...register("address", { required: true })}
          className={styles.formDataInput}
          required
        />
        {errors.address && <p>Address is required.</p>}
      </div>

      <div className={styles.formDataWrapper}>
        <label htmlFor="scheduleFoot" className={styles.formDataLabel}>
          Графік роботи:
        </label>
        <input
          {...register("schedule")}
          type="text"
          name="schedule"
          className={styles.formDataInput}
          placeholder="Ваш графік роботи"
          id="scheduleFoot"
        />
      </div>
      <div className={styles.formDataWrapper}>
        <label htmlFor="hoursFoot" className={styles.formDataLabel}>
          Години роботи:
        </label>
        <input
          {...register("hours")}
          type="text"
          name="hours"
          className={styles.formDataInput}
          placeholder="Години роботи"
          id="hoursFoot"
        />
      </div>

      <div className={styles.formDataWrapper}>
        <label htmlFor="email" className={styles.formDataLabel}>
          Електронна пошта:
        </label>
        <input
          type="email"
          name="email"
          placeholder="Ваша електронна пошта"
          id="emailFoot"
          className={`${styles.formDataInput} ${styles.formDataInputEmail}`}
          {...register("email", {
            // required: true,
            pattern:
              // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          // className={`form-control ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && errors.email.message}
        {/* <ErrorMessage className="invalid-feedback" name="email" as="div" errors={errors} /> */}
      </div>

      <div className={styles.formDataWrapper}>
        <label htmlFor="phoneFoot" className={styles.formDataLabel}>
          Номер телефону:
        </label>
        <input
          {...register("phone", {
            maxLength: 11,
            minLength: 8,
          })}
          type="tel"
          name="phone"
          className={styles.formDataInput}
          placeholder="Ваш номер телефону"
          id="phoneFoot"
        />
      </div>

      <div className={styles.buttonSubmitWrapper}>
        <div className={styles.buttonSubmit}>
          <Button
            title={"Завантажити дані"}
            type={"submit"}
            // disabled={isAddDisabled}
          />
        </div>
      </div>
    </form>
  );
};

export default FormFooter;
