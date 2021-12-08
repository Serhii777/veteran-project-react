/* eslint-disable import/no-anonymous-default-export */
const getError = (state) => state.auth.error;

const isAuthenticatedToken = (state) => state.auth.token;
const getUserName = (state) => state.auth.user.useradmin.name;

export default {
  isAuthenticatedToken,
  getUserName,
  getError,
};
