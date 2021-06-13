import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { css } from "@emotion/core";
import { ScaleLoader } from "react-spinners";
import { loadingSelectors } from "../../../redux/loading";
import { authOperations, authSelectors } from "../../../redux/auth";
// import { authOperations } from "../../../redux/auth";
import Button from "../../Button/Button";
import { FormErrors } from "../FormErrors";
// import styles from './form.module.css';

import styles from "./RegistrationForm.module.css";

const override = css`
  display: block;
  margin: -13px auto 0;
`;

// const RegistrationForm = () => {
//   return (
//     <div className={styles.registrationForm}>
//       <h1>Hello from RegistrationForm</h1>
//     </div>
//   );
// };
// export default RegistrationForm;

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

    
    this.props.onRegister({ ...this.state }).then((res) => {
      console.log("this.state:", this.state);
      console.log("resOnRegister:", res);


      if (!res) {
        throw new Error(`Реєстрація завершилась невдало: ${res}!`);
        // return console.log(`Реєстрація завершилась невдало: ${res}!`);
        // console.log(`Реєстрація завершилась невдало: ${res}!`);
      } else {
        return this.setState({ name: "", email: "", password: "" });
      }
    });
    // return
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
          : (inputColor("name", "red"),
            // 'Користувач з даним ім"ям не має доступу');
            'Занадто коротке ім"я');
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
              <Link to={`/admin/login`} className={styles.buttonLoginLink}>
                <Button
                  title={
                    loading ? (
                      <ScaleLoader
                        color={"#fff"}
                        loading={true}
                        css={override}
                      />
                    ) : (
                      "Реєстрація"
                    )
                  }
                  type={"submit"}
                  disabled={!this.state.formValid}
                  className={styles.buttonRegistration}
                />
              </Link>
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
