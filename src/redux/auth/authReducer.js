import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";

const initialUserState = { name: null, email: null };
const initialTokenState = null;

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.currentUserSuccess]: (_, { payload }) => payload.user,
  [authActions.currentUserError]: () => initialUserState,
});

const token = createReducer(initialTokenState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.currentUserSuccess]: (_, { payload }) => payload.token,
  [authActions.currentUserError]: () => initialTokenState,
  [authActions.logoutSuccess]: () => initialTokenState,
  [authActions.logoutError]: () => initialTokenState,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.registerSuccess]: () => null,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.loginSuccess]: () => null,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => null,
  [authActions.currentUserError]: (_, { payload }) => payload,
  [authActions.currentUserSuccess]: () => null,
});

const loading = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,
  [authActions.logoutRequest]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.logoutError]: () => false,
  [authActions.currentUserRequest]: () => true,
  [authActions.currentUserSuccess]: () => false,
  [authActions.currentUserError]: () => false,
});

export default combineReducers({ user, token, loading, error });
