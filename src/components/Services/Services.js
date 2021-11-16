import React from "react";
// import { Router, Switch, Route, NavLink, Link } from "react-router-dom";
import { Route, NavLink } from "react-router-dom";

import SvgOurServices from "../SvgComponents/SvgOurServices";

import routes from "../../routes";

import PsychologicalHelp from "./ServicesPages/PsychologicalHelp";
import LegalAid from "./ServicesPages/LegalAid";
import SocioAdvice from "./ServicesPages/SocioAdvice";
import Rehabilitation from "./ServicesPages/Rehabilitation";
import CreativeWorkshop from "./ServicesPages/CreativeWorkshop";
import WomenClub from "./ServicesPages/WomenClub";

import styles from "./Services.module.css";

const Services = () => {
  const routeOurService = routes.find((route) =>
    route.path === "/services" ? route : undefined
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
        path="/services/psychologicalhelp"
        component={PsychologicalHelp}
      />
      <Route path="/services/legalaid" component={LegalAid} />
      <Route path="/services/socioadvice" component={SocioAdvice} />
      <Route path="/services/rehabilitation" component={Rehabilitation} />
      <Route
        path="/services/creativeworkshop"
        component={CreativeWorkshop}
      />
      <Route path="/services/womenclub" component={WomenClub} />
    </div>
  );
};

export default Services;
