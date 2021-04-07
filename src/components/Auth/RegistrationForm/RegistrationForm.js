import React, { Component } from 'react';

import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  return (
    <div className={styles.registrationForm}>
      <h1>Hello from RegistrationForm</h1>
      
    </div>
  );
};

export default RegistrationForm;





// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { css } from '@emotion/core';
// import { ScaleLoader } from 'react-spinners';
// import { loadingSelectors } from '../../../redux/loading';
// import { authOperations, authSelectors } from '../../../redux/auth';
// import Button from '../../Button/Button';
// import { FormErrors } from './FormErrors';
// import styles from './form.module.css';

// const override = css`
//   display: block;
//   margin: -13px auto 0;
// `;

// class RegistrationForm extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//     formErrors: { name: '', email: '', password: '' },
//     nameValid: false,
//     emailValid: false,
//     passwordValid: false,
//     formValid: false,
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value }, () => {
//       this.validateField(name, value);
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister({ ...this.state }).then(res => {
//       if (res) {
//         return;
//       }
//       this.setState({ name: '', email: '', password: '' });
//     });
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
//       case 'name':
//         nameValid = value.length >= 3;
//         fieldValidationErrors.name = nameValid
//           ? (inputColor('name', 'green'), '')
//           : (inputColor('name', 'red'), ' Слишком короткое имя');
//         break;
//       case 'email':
//         emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

//         fieldValidationErrors.email = emailValid
//           ? (inputColor('email', 'green'), '')
//           : (inputColor('email', 'red'), ' Неправельная почта');

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
//         nameValid: nameValid,
//         emailValid: emailValid,
//         passwordValid: passwordValid,
//       },
//       this.validateForm,
//     );
//   }

//   validateForm() {
//     this.setState({
//       formValid:
//         this.state.nameValid &&
//         this.state.emailValid &&
//         this.state.passwordValid,
//     });
//   }

//   render() {
//     const { name, email, password } = this.state;
//     const { loading } = this.props;
//     return (
//       <div className={styles.registrationForm}>
//         <form onSubmit={this.handleSubmit} className={styles.form}>
//           <h3 className={styles.title}>Регистрация</h3>

//           <label className={styles.label}>
//             <input
//               className={styles.input}
//               id="name"
//               required
//               placeholder="Имя *"
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//             <FormErrors formErrors={this.state.formErrors.name} />
//           </label>
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
//               title={
//                 loading ? (
//                   <ScaleLoader color={'#fff'} loading={true} css={override} />
//                 ) : (
//                   'Регистрация'
//                 )
//               }
//               type={'submit'}
//               disabled={!this.state.formValid}
//               className={styles.buttonRegistration}
//             />
//             <Link to={`/login`} className={styles.buttonLogin}>
//               <Button title={'Вход'} role={'link'} />
//             </Link>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   authError: authSelectors.getError(state),
//   loading: loadingSelectors(state),
// });

// export default connect(mapStateToProps, {
//   onRegister: authOperations.register,
// })(RegistrationForm);
