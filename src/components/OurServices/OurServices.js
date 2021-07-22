import React from "react";
// import { Router, Switch, Route, NavLink, Link } from "react-router-dom";
import { Route, NavLink } from "react-router-dom";

import SvgOurServices from "../SvgComponents/SvgOurServices";

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
      <div className={styles.сontentPageTitleWrapper}>
        <div className={styles.svgWrapper}>
          <SvgOurServices />
        </div>
        <h2 className={styles.ourServicesTitle}>Послуги центру</h2>
      </div>

      {/* <div className={styles.ourServicesListWrapper}> */}
      <ul className={styles.ourServicesList}>
        <li className={styles.ourServicesItem}>
          <NavLink
            to="/ourservices/psychologicalhelp"
            className={styles.link}
            activeClassName={styles.activelink}>
            Психологічна допомога
          </NavLink>
        </li>
        <li className={styles.ourServicesItem}>
          <NavLink
            to="/ourservices/legalaid"
            className={styles.link}
            activeClassName={styles.activelink}>
            Правова допомога
          </NavLink>
        </li>
        <li className={styles.ourServicesItem}>
          <NavLink
            to="/ourservices/socioadvice"
            className={styles.link}
            activeClassName={styles.activelink}>
            Соціально-правова консультація
          </NavLink>
        </li>
        <li className={styles.ourServicesItem}>
          <NavLink
            to="/ourservices/rehabilitation"
            className={styles.link}
            activeClassName={styles.activelink}>
            Реабілітолог
          </NavLink>
        </li>
        <li className={styles.ourServicesItem}>
          <NavLink
            to="/ourservices/creativeworkshop"
            className={styles.link}
            activeClassName={styles.activelink}>
            Творча майстерня
          </NavLink>
        </li>
        <li className={styles.ourServicesItem}>
          <NavLink
            to="/ourservices/womenclub"
            className={styles.link}
            activeClassName={styles.activelink}>
            Жіночий клуб
          </NavLink>
        </li>
      </ul>
      {/* </div> */}

      {/* <div className={styles.selectContainer}>
        <select className={styles.selectTest}>
          <option value="test1" className={styles.optionTest}>Test 1</option>
          <option value="test2" className={styles.optionTest}>Test 2</option>
          <option value="test3" className={styles.optionTest}>Test 3</option>
        </select>
      </div> */}

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
