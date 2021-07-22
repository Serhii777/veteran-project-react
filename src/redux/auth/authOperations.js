import authActions from "./authActions";
import axios from "axios";
// import { authActions, authSelectors } from "../auth";

// import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "animate.css/animate.min.css";

import { API_BASE_URL } from "../../services/apiUrl";

axios.defaults.baseURL = `${API_BASE_URL}`;

// console.log("URL", axios.defaults.baseURL);

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
  // const useradmin = {
  //   name: credentials.name,
  //   email: credentials.email,
  //   password: credentials.password,
  // };

  dispatch(authActions.registerRequest());

  return (
    axios
      // .post(`${API_BASE_URL}/auth/signup`, useradmin)
      // .post(`/auth/signup`, useradmin)
      .post(`/auth/signup`, credentials)
      .then((response) => {
        token.set(response.data.token);
        dispatch(authActions.registerSuccess(response.data));

        // console.log("responseRegister1", response);
        console.log("responseRegister1Data", response.data);

        store.addNotification({
          title: "Wonderful!",
          type: "success",
          message:
            "На вказану Вами адресу електронної пошти надіслано листа для завершення реєстрації.",
          container: "top-full",
          animationIn: ["animate__animated animate__zoomIn"],
          animationOut: ["animate__animated animate__zoomOut"],
          dismiss: {
            duration: 4000,
            onScreen: true,
            showIcon: true,
          },
        });
        return response;
      })
      .then((response) => {
        store.addNotification({
          type: "info",
          message:
            "Щоб отримати доступ до адміністративної частини сайту, будь-ласка, підтвердіть Вашу пошту перейшовши за посиланням в листі.",
          container: "center",
          animationIn: ["animate__animated animate__zoomIn"],
          animationOut: ["animate__animated animate__zoomOut"],
          dismiss: {
            duration: 8000,
            onScreen: true,
            showIcon: true,
          },
        });

        return response;
      })
      .catch((error) => {
        console.log("error", error.response);
        // console.log("error", error.data);
        // console.log("error", error.response.data);
        // console.log("error", error.response.data.details);
        // console.log("error", error.response.data.details[0].message);
        // console.log("error", error._original.details.data.message);
        // console.log("error", error.original.details.data.message);

        store.addNotification({
          type: "danger",
          message: error.response.data.message,
          // message: error.response.data.details[0].message,
          // message: error.response,
          container: "center",
          animationIn: ["animate__animated animate__zoomIn"],
          animationOut: ["animate__animated animate__zoomOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
            showIcon: true,
          },
        });

        dispatch(authActions.registerError(error.response.data.message));
        // dispatch(authActions.registerError(error.response.data.details[0].message));
        return error;
      })
  );
};

//! login
const login = (credentials) => (dispatch) => {
  const useradmin = {
    email: credentials.email,
    password: credentials.password,
  };

  dispatch(authActions.loginRequest());
  return axios
    .put(`/auth/login`, useradmin)
    .then((response) => {
      token.set(response.data.token); //* Пока все Ок
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch((error) => {
      dispatch(authActions.loginError(error.response.data.message));

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

  return axios
    .post("/auth/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) =>
      dispatch(authActions.logoutError(error.response.data.message))
    );
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
    .catch((error) =>
      dispatch(authActions.currentUserError(error.response.data.message))
    );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  currentUser,
};
