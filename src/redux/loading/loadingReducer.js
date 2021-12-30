import { createReducer } from '@reduxjs/toolkit';
import { loadingActions } from './';
import { authActions } from '../auth';

const loading = createReducer(false, {
  [loadingActions.onLoading]: () => true,
  [loadingActions.offLoading]: () => false,
  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.currentRequest]: () => true,
  [authActions.currentSuccess]: () => false,
  [authActions.currentError]: () => false,
});

export default loading;
