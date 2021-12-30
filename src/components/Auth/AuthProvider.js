import React from "react";
import { connect } from "react-redux";

import { authSelectors } from "../../redux/auth";

import authContext from "../../services/authContext";

const AuthProvider = ({ isAuthenticated, children }) => {
  return (
    <authContext.Provider value={{ isAuthenticated }}>
      {children}
    </authContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticatedToken(state),
});

export default connect(mapStateToProps)(AuthProvider);
