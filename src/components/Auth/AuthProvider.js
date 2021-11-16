import React from "react";
import { connect } from "react-redux";

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

//! Переробити на HOOKS (без HOC) ============================
// const LanguageProvider = ({ children, props }) => {
//   const [language, setLanguage] = useState("english");

//   const updateLanguage = (e) => setLanguage(e.target.value);

//   return (
//     <LanguageContext.Provider
//       value={{
//         language: language,
//         updateLanguage: updateLanguage,
//       }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export default LanguageProvider;

