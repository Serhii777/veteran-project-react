import React, { Component } from 'react';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <h1>Hello from LoginForm</h1>
      
    </div>
  );
};

export default LoginForm;







// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { css } from '@emotion/core';
// import { ScaleLoader } from 'react-spinners';
// import { loadingSelectors } from '../../../redux/loading';
// import { authOperations } from '../../../redux/auth';
// import Button from '../../Button/Button';
// import { FormErrors } from '../RegistrationForm/FormErrors';
// import styles from '../RegistrationForm/form.module.css';

// const override = css`
//   display: block;
//   margin: -13px auto 0;
// `;

// class LoginForm extends Component {
//   state = {
//     email: '',
//     password: '',
//     formErrors: { email: '', password: '' },
//     emailValid: false,
//     passwordValid: false,
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//     this.validateField(name, value);
//   };

//   handleSubmit = e => {
//     const { onLogin, onRefresh } = this.props;
//     e.preventDefault();

//     onLogin({ ...this.state });
//   };

//   validateField(fieldName, value) {
//     let fieldValidationErrors = this.state.formErrors;
//     let nameValid = this.state.nameValid;
//     let emailValid = this.state.emailValid;
//     let passwordValid = this.state.passwordValid;

//     const inputColor = (fieldName, color) => {
//       return (document.getElementById(
//         `${fieldName}`,
//       ).style.borderColor = `${color}`);
//     };

//     switch (fieldName) {
//       case 'email':
//         emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

//         fieldValidationErrors.email = emailValid
//           ? (inputColor('email', 'green'), '')
//           : (inputColor('email', 'red'), ' Неправильная почта');

//         break;
//       case 'password':
//         passwordValid = value.length >= 6;
//         fieldValidationErrors.password = passwordValid
//           ? (inputColor('password', 'green'), '')
//           : (inputColor('password', 'red'), ' Слишком короткий пароль');
//         break;
//       default:
//         break;
//     }
//     this.setState(
//       {
//         formErrors: fieldValidationErrors,
//         emailValid: emailValid,
//         passwordValid: passwordValid,
//       },
//       this.validateForm,
//     );
//   }

//   validateForm() {
//     this.setState({
//       formValid: this.state.emailValid && this.state.passwordValid,
//     });
//   }

//   render() {
//     const { email, password } = this.state;
//     const { loading } = this.props;
//     return (
//       <div className={styles.registrationForm}>
//         <form onSubmit={this.handleSubmit} className={styles.form}>
//           <h3 className={styles.title}>Вход</h3>
//           <label className={styles.label}>
//             <input
//               className={styles.input}
//               id="email"
//               required
//               placeholder="Почта *"
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//             <FormErrors formErrors={this.state.formErrors.email} />
//           </label>

//           <label className={styles.label}>
//             <input
//               className={styles.input}
//               id="password"
//               required
//               placeholder="Пароль *"
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//             <FormErrors formErrors={this.state.formErrors.password} />
//           </label>
//           <div className={styles.buttons}>
//             <Button
//               className={styles.buttonLogin}
//               title={
//                 loading ? (
//                   <ScaleLoader color={'#fff'} loading={true} css={override} />
//                 ) : (
//                   'Вход'
//                 )
//               }
//               type={'submit'}
//               disabled={!this.state.formValid}
//             />

//             <Link to={`/register`} className={styles.buttonRegistration}>
//               <Button title={'Регистрация'} role={'link'} />
//             </Link>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   loading: loadingSelectors(state),
// });

// export default connect(mapStateToProps, {
//   onLogin: authOperations.logIn,
//   onRefresh: authOperations.refresh,
// })(LoginForm);
