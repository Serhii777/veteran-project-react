import React from "react";
import { connect } from "react-redux";

// import React, { useState } from "react";

import { authSelectors } from "../../redux/auth";

import authContext from "../../services/authContext";

const AuthProvider = ({ isAuthenticated, children }) => {
  // const [user, setUser] = useState(null);

  // const logIn = () => {
  //   setUser("Admin");
  // };

  // const logOut = () => {
  //   setUser(null);
  // };

  return (
    //   <authContext.Provider value={{ user, logIn, logOut }}>
    <authContext.Provider value={{ isAuthenticated }}>
      {children}
    </authContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticatedToken(state),
});

export default connect(mapStateToProps)(AuthProvider);
