// import React from "react";
import React, { useEffect, useState } from "react";
import { 
  // Route, 
  NavLink, 
  // Link, 
  useHistory } from "react-router-dom";

// import PsychologicalHelp from "../OurServices/PsychologicalHelp/PsychologicalHelp";
// import LegalAid from "../OurServices/LegalAid/LegalAid";
// import SocioAdvice from "../OurServices/SocioAdvice/SocioAdvice";
// import Rehabilitation from "../OurServices/Rehabilitation/Rehabilitation";
// import CreativeWorkshop from "../OurServices/CreativeWorkshop/CreativeWorkshop";
// import WomenClub from "../OurServices/WomenClub/WomenClub";

import routes from "../../routes";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const [value, setValue] = useState("psychologicalhelp");
  let history = useHistory();

  useEffect(() => {
    setValue();
  }, []);

  const handleOnClick = (event) => {
    console.log("valueNavigation:", event.target.value);

    history.push(`/?location=${event.target.value}`);
    // history.push(`/ourservices/${value}`);

    console.log("history:", history.location);
    // history.push(`/location=${e.target.value}`);
  };

  return (
    <nav className={styles.navigationWrapper}>
      <h3 className={styles.navigationTitle}>Навігація по сайту</h3>
      <div>
        <ul className={styles.navigationList}>
          {routes.filter((route) => route.path !== "/admin") ? (
            routes
              .filter((route) => route.path !== "/admin")
              .map((route) => {
                // console.log("routeNav:", route);
                //* console.log("routeNavRouters:", route.routes); routeNavRouters: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
                return (
                  <li className={styles.navigationItem}>
                    <NavLink
                      key={route.label}
                      to={route.path}
                      exact={route.exact}
                      className={styles.link}
                      activeClassName={styles.activelink}>
                      {route.label}
                      {route.routes ? (
                        <select onChange={handleOnClick}>
                          {/* <select */}
                          {/* onChange={(e) => setValue(e.currentTarget.value)}> */}
                          {route.routes.map((nestedRoute) => {
                            return (
                              <option
                                key={nestedRoute.label}
                                // to={nestedRoute.path}
                                value={nestedRoute.value}
                                // value={nestedRoute.label}
                                // value={nestedRoute.path}
                                className={styles.link}
                                activeClassName={styles.activelink}>
                                {nestedRoute.label}
                                {/* {
                                  <Link to="/ourservices/psychologicalhelp">
                                    Психологічна допомога
                                  </Link>
                                } */}
                              </option>
                            );
                          })}
                        </select>
                      ) : null}
                    </NavLink>
                  </li>
                );
              })
          ) : (
            <li className={styles.navigationItem}>
              <NavLink
                key="Admin-Home page"
                to="/admin"
                exact
                className={styles.link}
                activeClassName={styles.activelink}>
                Admin-Home page
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      {/* <Route
        path="/ourservices/psychologicalhelp"
        component={PsychologicalHelp}
      />
      <Route path="/ourservices/legalaid" component={LegalAid} />
      <Route path="/ourservices/socioadvice" component={SocioAdvice} />
      <Route path="/ourservices/rehabilitation" component={Rehabilitation} />
      <Route
        path="/ourservices/creativeworkshop"
        component={CreativeWorkshop}
      />
      <Route path="/ourservices/womenclub" component={WomenClub} /> */}
    </nav>
  );
};

export default Navigation;
