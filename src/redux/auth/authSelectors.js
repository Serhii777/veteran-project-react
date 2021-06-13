/* eslint-disable import/no-anonymous-default-export */
const getError = state => state.auth.error;


const isAuthenticatedToken = (state) => state.auth.token;
const getUserName = (state) => state.auth.user.name;

console.log("isAuthenticatedToken:", isAuthenticatedToken);
console.log("getUserName:", getUserName);

export default {
  isAuthenticatedToken,
  getUserName,
  getError,
};
