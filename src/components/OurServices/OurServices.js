import React from "react";
// import { Router, Switch, Route, NavLink, Link } from "react-router-dom";
import { Route, NavLink } from "react-router-dom";

import SvgOurServices from "../SvgComponents/SvgOurServices";

import routes from "../../routes";

import PsychologicalHelp from "./OurServicesPages/PsychologicalHelp";
import LegalAid from "./OurServicesPages/LegalAid";
import SocioAdvice from "./OurServicesPages/SocioAdvice";
import Rehabilitation from "./OurServicesPages/Rehabilitation";
import CreativeWorkshop from "./OurServicesPages/CreativeWorkshop";
import WomenClub from "./OurServicesPages/WomenClub";

import styles from "./OurServices.module.css";

const OurServices = () => {
  const routeOurService = routes.find((route) =>
    route.path === "/ourservices" ? route : undefined
  );

  return (
    <div className={styles.ourServices}>
      <div className={styles.сontentPageTitleWrapper}>
        <div className={styles.svgWrapper}>
          <SvgOurServices />
        </div>
        {/* <h2 className={styles.ourServicesTitle}>Послуги центру</h2> */}
        <h2 className={styles.ourServicesTitle}>
          {routeOurService.title.slice(0, -1)}
        </h2>
      </div>

      <ul className={styles.ourServicesList}>
        {routeOurService.routes.map((route) => {
          return (
            <li key={route.id} className={styles.ourServicesItem}>
              <NavLink
                to={route.path}
                className={styles.link}
                activeClassName={styles.activelink}>
                {route.title}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <Route
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
      <Route path="/ourservices/womenclub" component={WomenClub} />
    </div>
  );
};

export default OurServices;
