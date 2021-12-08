/* eslint-disable import/no-anonymous-default-export */
import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/registerRequest");
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");

const loginRequest = createAction("auth/loginRequest");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

const logoutRequest = createAction("auth/logoutRequest");
const logoutSuccess = createAction("auth/logoutSuccess");
const logoutError = createAction("auth/logoutError");

const currentUserRequest = createAction("auth/currentUserRequest");
const currentUserSuccess = createAction("auth/currentUserSuccess");
const currentUserError = createAction("auth/currentUserError");

export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  currentUserRequest,
  currentUserSuccess,
  currentUserError,
};
