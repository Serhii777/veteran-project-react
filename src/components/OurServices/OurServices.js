import React from "react";
import { Router, Switch, Route, NavLink, Link } from "react-router-dom";

import PsychologicalHelp from "./PsychologicalHelp/PsychologicalHelp";
import LegalAid from "./LegalAid/LegalAid";
import SocioAdvice from "./SocioAdvice/SocioAdvice";
import Rehabilitation from "./Rehabilitation/Rehabilitation";
import CreativeWorkshop from "./CreativeWorkshop/CreativeWorkshop";
import WomenClub from "./WomenClub/WomenClub";

import styles from "./OurServices.module.css";

const OurServices = () => {
  return (
    <div className={styles.ourServices}>
      <h2 className={styles.ourServicesTitle}>Hello from OurServices</h2>
      <div className={styles.ourServicesListWrapper}>
        <ul className={styles.ourServicesList}>
          <li className={styles.ourServicesItem}>
            <Link to="/ourservices/psychologicalhelp">
              Психологічна допомога
            </Link>
          </li>
          <li className={styles.ourServicesItem}>
            <Link to="/ourservices/legalaid">Правова допомога</Link>
          </li>
          <li className={styles.ourServicesItem}>
            <Link to="/ourservices/socioadvice">
              Соціально-правова консультація
            </Link>
          </li>
          <li className={styles.ourServicesItem}>
            <Link to="/ourservices/rehabilitation">Реабілітолог</Link>
          </li>
          <li className={styles.ourServicesItem}>
            <Link to="/ourservices/creativeworkshop">Творча майстерня</Link>
          </li>
          <li className={styles.ourServicesItem}>
            <Link to="/ourservices/womenclub">Жіночий клуб</Link>
          </li>
        </ul>
      </div>

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
