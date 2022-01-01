import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import { css } from "@emotion/core";
import { ScaleLoader } from "react-spinners";
import { loadingSelectors } from "../../../redux/loading";
import { authOperations, authSelectors } from "../../../redux/auth";

import Button from "../../Button/Button";
import SvgEnvelopEmail from "../../SvgComponents/SvgEnvelopEmail";
import SvgKey from "../../SvgComponents/SvgKey";
import SvgNameBlack from "../../SvgComponents/SvgNameBlack";

import { FormErrors } from "../FormErrors";
// import { store } from "react-notifications-component";
import styles from "./RegistrationForm.module.css";

// const override = css`
//   display: block;
//   margin: 13px auto 0;
// `;

class RegistrationForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    formErrors: { name: "", email: "", password: "" },
    nameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const useradminParams = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    const { onRegister } = this.props;

    onRegister(useradminParams).then((data) => {
      // console.log("dataRegisterForm:", data);
      if (!data) {
        throw new Error(`Реєстрація завершилась невдало: ${data}!`);
      } else {
        return (
          setTimeout(() => {
            this.setState({ name: "", email: "", password: "" })
            this.props.history.push("/admin/login");

            // store.addNotification({
            //   title: "Wonderful!",
            //   type: "success",
            //   message:
            //     "Поздоровляємо, реєстрація пройшла успішно! Щоб зайти до адміністративної частини сайту, введіть Вашу електронну пошту і пароль та натисніть кнопку «Вхід»",
            //   container: "center",
            //   animationIn: ["animate__animated animate__zoomIn"],
            //   animationOut: ["animate__animated animate__zoomOut"],
            //   dismiss: {
            //     duration: 0,
            //     onScreen: true,
            //     showIcon: true,
            //   },
            // });
          }, 10000)
        );
      }
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    const inputColor = (fieldName, color) => {
      return (document.getElementById(
        `${fieldName}`
      ).style.borderColor = `${color}`);
    };

    switch (fieldName) {
      case "name":
        nameValid = value.length >= 5;
        fieldValidationErrors.name = nameValid
          ? (inputColor("name", "green"), "")
          : (inputColor("name", "red"), 'Занадто коротке ім"я');
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

        fieldValidationErrors.email = emailValid
          ? (inputColor("email", "green"), "")
          : (inputColor("email", "red"), "Поштова адреса введена невірно");

        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid
          ? (inputColor("password", "green"), "")
          : (inputColor("password", "red"), "Занадто короткий пароль");
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.emailValid &&
        this.state.passwordValid,
    });
  }

  render() {
    const { name, email, password } = this.state;
    const { loading } = this.props;

    return (
      <div className={styles.registrationFormWrapper}>
        <h3 className={styles.registerFormTitle}>
          Форма реєстрації для доступу до адміністрування сайту
        </h3>
        <form onSubmit={this.handleSubmit} className={styles.registerForm}>
          <label className={styles.registerFormLabel}>
            <div className={styles.svgWrapper}>
              <SvgNameBlack />
            </div>
            <input
              className={styles.registerFormInput}
              id="name"
              required
              placeholder="Ім’я *"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              autocomplete="on"
            />
            <FormErrors formErrors={this.state.formErrors.name} />
          </label>
          <label className={styles.registerFormLabel}>
            <div className={styles.svgWrapper}>
              <SvgEnvelopEmail />
            </div>
            <input
              className={styles.registerFormInput}
              id="email"
              required
              placeholder="Пошта *"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              autocomplete="on"
            />
            <FormErrors formErrors={this.state.formErrors.email} />
          </label>
          <label className={styles.registerFormLabel}>
            <div className={styles.svgWrapper}>
              <SvgKey />
            </div>
            <input
              className={styles.registerFormInput}
              id="password"
              required
              placeholder="Пароль *"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              autocomplete="on"
            />
            <FormErrors formErrors={this.state.formErrors.password} />
          </label>
          <div className={styles.buttonWrapper}>
            <div className={styles.buttonRegistrationWrapper}>
              <Button
                title={
                  loading ? (
                    <ScaleLoader
                      color={"#fff"}
                      loading={true}
                      style={{ display: "block", margin: "13px auto 0" }}
                      //  css={override}
                    />
                  ) : (
                    // const override = css`
                    //   display: block;
                    //   margin: 13px auto 0;
                    // `;
                    "Реєстрація"
                  )
                }
                type={"submit"}
                disabled={!this.state.formValid}
                className={styles.buttonRegistration}
              />
            </div>
            <div className={styles.buttonLoginWrapper}>
              <Link to={`/admin/login`} className={styles.buttonLogin}>
                <Button title={"Вхід"} role={"link"} />
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authError: authSelectors.getError(state),
  loading: loadingSelectors(state),
});

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
