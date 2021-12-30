import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import { ScaleLoader } from "react-spinners";
// import { loadingSelectors } from '../../../redux/loading';
import { authOperations } from "../../../redux/auth";
import { loadingSelectors } from "../../../redux/loading";
import Button from "../../Button/Button";
import SvgEnvelopEmail from "../../SvgComponents/SvgEnvelopEmail";
import SvgKey from "../../SvgComponents/SvgKey";
import { FormErrors } from "../FormErrors";
import styles from "../RegistrationForm/RegistrationForm.module.css";

const override = css`
  display: block;
  margin: -13px auto 0;
`;

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    formErrors: { email: "", password: "" },
    emailValid: false,
    passwordValid: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    this.validateField(name, value);
  };

  handleSubmit = (e) => {
    const { onLogin } = this.props;
    e.preventDefault();

    onLogin({ ...this.state });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    const inputColor = (fieldName, color) => {
      return (document.getElementById(
        `${fieldName}`
      ).style.borderColor = `${color}`);
    };

    switch (fieldName) {
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
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  render() {
    const { email, password } = this.state;
    const { loading } = this.props;
    return (
      <div className={styles.loginFormWrapper}>
        <h3 className={styles.registerFormTitle}>
          Вхід до адміністративної частини сайту
        </h3>
        <form onSubmit={this.handleSubmit} className={styles.registerForm}>
          <label className={styles.loginFormLabel}>
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

          <label className={styles.loginFormLabel}>
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
            <div className={styles.buttonLoginWrapper}>
              <Button
                className={styles.buttonLogin}
                title={
                  loading ? (
                    <ScaleLoader color={"#fff"} loading={true} css={override} />
                  ) : (
                    "Вхід"
                  )
                }
                type={"submit"}
                disabled={!this.state.formValid}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: loadingSelectors(state),
});

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
