import authActions from "./authActions";
import axios from "axios";
// import { authActions, authSelectors } from "../auth";

// import ReactNotification from 'react-notifications-component'/
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "animate.css/animate.min.css";

import { baseUrl } from "../../services/apiUrl";

axios.defaults.baseURL = `${baseUrl}`;
// axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

console.log("URL", axios.defaults.baseURL);
console.log("authActions:", authActions);

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
//! register
const register = (credentials) => (dispatch) => {
  console.log("credentialsReg:", credentials);

  const useradmin = {
    name: credentials.name,
    email: credentials.email,
    password: credentials.password,
  };

  dispatch(authActions.registerRequest());

  // return (
  axios
    // .post("/users/signup", credentials)
    // .post("/users/signup", user)
    // .post(`${baseUrl}/auth/signup`, useradmin)
    .post(`/auth/signup`, useradmin)
    .then((response) => {
      console.log("responseRegister", response);
      token.set(response.data.token);

      dispatch(authActions.registerSuccess(response.data));
      store.addNotification({
        title: "Wonderful!",
        type: "success",
        message:
          "На указанный Вами адрес почты выслано письмо для завершения регистрации.",
        container: "center",
        animationIn: ["animate__animated animate__zoomIn"],
        animationOut: ["animate__animated animate__zoomOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
          showIcon: true,
        },
      });
    })
    .then((response) => {
      store.addNotification({
        type: "info",
        message:
          "Чтобы войти, пожалуйста подтвердите Вашу почту перейдя по ссылке в письме",
        container: "top-full",
        animationIn: ["animate__animated animate__zoomIn"],
        animationOut: ["animate__animated animate__zoomOut"],
        dismiss: {
          duration: 0,
          onScreen: true,
          showIcon: true,
        },
      });
    })
    .catch((error) => {
      store.addNotification({
        type: "danger",
        message: error.response.data.message,
        container: "center",
        animationIn: ["animate__animated animate__zoomIn"],
        animationOut: ["animate__animated animate__zoomOut"],
        dismiss: {
          duration: 10000,
          onScreen: true,
          showIcon: true,
        },
      });

      dispatch(authActions.registerError(error.response.data.message));
      return error;
    });
  // );
};

//! login
const login = (credentials) => (dispatch) => {
  const useradmin = {
    email: credentials.email,
    password: credentials.password,
  };

  dispatch(authActions.loginRequest());
  axios
    .put(`/auth/login`, useradmin)
    .then((response) => {
      console.log("responseLog:", response);

      token.set(response.data.token); //* Пока все Ок
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch((error) => {
      dispatch(authActions.loginError(error.response.data.message));
      console.log("errorMessage:", error.response.data.message);

      store.addNotification({
        type: "danger",
        message: error.response.data.message,
        container: "center",
        animationIn: ["animate__animated animate__zoomIn"],
        animationOut: ["animate__animated animate__zoomOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    });
};

//! logout
const logout = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  // return (
  axios
    .post(`${baseUrl}/auth/logout`)
    // .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error.response.data.message)));
  // );
};

//! currentUser
const currentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.currentUserRequest());
  axios
    .get("/users/current")
    .then(({ data }) => dispatch(authActions.currentUserSuccess(data)))
    .catch((error) => dispatch(authActions.currentUserError(error.response.data.message)));
};

// const register = (credentials) => (dispatch, getState) => {
//   const user = {
//     name: credentials.name,
//     email: credentials.email,
//     password: credentials.password,
//   };

// const state = getState();
// const params = authSelectors.getParams(state);

// if (params && params.age) {
//   user.params = params;
// }

// dispatch(authActions.registerRequest());
// console.log("user", user);

// return (
//   axios
//     // .post("/auth/register", user)
//     .post("/users/signup", user)
//     .then((res) => {
//       dispatch(authActions.registerSuccess());
//       console.log("resRedux", res);

//   store.addNotification({
//     type: 'success',
//     message:
//       'На указанный Вами адрес почты выслано письмо для завершения регистрации.',
//     container: 'center',
//     animationIn: ['animate__animated animate__zoomIn'],
//     animationOut: ['animate__animated animate__zoomOut'],
//     dismiss: {
//       duration: 10000,
//       onScreen: true,
//       showIcon: true,
//     },
//   });
// })
// .then(res => {
// store.addNotification({
//   type: 'info',
//   message:
//     'Чтобы войти, пожалуйста подтвердите Вашу почту перейдя по ссылке в письме',
//   container: 'top-full',
//   animationIn: ['animate__animated animate__zoomIn'],
//   animationOut: ['animate__animated animate__zoomOut'],
//   dismiss: {
//     duration: 0,
//     onScreen: true,
//     showIcon: true,
//   },
// });
//   })
// .catch((error) => {
// store.addNotification({
//     type: 'danger',
//     message: error.response.data.message,
//     container: 'center',
//     animationIn: ['animate__animated animate__zoomIn'],
//     animationOut: ['animate__animated animate__zoomOut'],
//     dismiss: {
//       duration: 10000,
//       onScreen: true,
//       showIcon: true,
//     },
//   });

//         dispatch(authActions.registerError(error.message));
//         return error;
//       })
//   );
// };

// const logIn = (credentials) => (dispatch, getState) => {
//   const user = {
//     email: credentials.email,
//     password: credentials.password,
//   };

//   dispatch(authActions.loginRequest());

//   console.log("userLogin", user);

//   axios
// .put("/auth/login", user)
// .put("/users/login", credentials)
// .then((response) => {
//   console.log("responseLog:", response);

// token.set(response.data.token.accessToken);
//   token.set(response.data.token);

//   dispatch(authActions.loginSuccess(response.data));
// if (response.data.user.params && response.data.user.params.age) {
//   dispatch(
//     notrecomendedproductsOperations.getListNotRecomendedProductsAndCalories(
//       response.data.user.params,
//     ),
//   );
// }
// dispatch(rationItemsOperations.fetchRationItems());
// dispatch(refresh(response.data.token.expiresIn));
// })
// .catch((error) => {
// store.addNotification({
//   type: 'danger',
//   message: error.response.data.message,
//   container: 'center',
//   animationIn: ['animate__animated animate__zoomIn'],
//   animationOut: ['animate__animated animate__zoomOut'],
//   dismiss: {
//     duration: 5000,
//     onScreen: true,
//   },
// });

//       dispatch(authActions.loginError(error.message));
//     });
// };

// const logOut = () => (dispatch) => {
//   dispatch(authActions.logoutRequest());

//   axios
//     .patch("/auth/logout")
//     .then(() => {
//       token.unset();
//       dispatch(authActions.logoutSuccess());
//     })
//     .catch((error) => {
//       dispatch(authActions.logoutError(error));
//     });
// };

export default {
  register,
  login,
  logout,
  currentUser,
};
