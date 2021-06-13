import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
// import NavigationHooks from "../Navigation/NavigationHooks";

// import HomeView from "../../views/HomeView";
// import LegalDocumentsView from "../../views/LegalDocumentsView";
// import OurServicesView from "../../views/OurServicesView";
// import AnnouncementNewsView from "../../views/AnnouncementNewsView";
// import ResultsWorkView from "../../views/ResultsWorkView";
// import ContactsView from "../../views/ContactsView";
// import AdminView from "../../views/AdminView";

// import PsychologicalHelp from "../OurServices/PsychologicalHelp/PsychologicalHelp";
// import LegalAid from "../OurServices/LegalAid/LegalAid";
// import SocioAdvice from "../OurServices/SocioAdvice/SocioAdvice";
// import Rehabilitation from "../OurServices/Rehabilitation/Rehabilitation";
// import CreativeWorkshop from "../OurServices/CreativeWorkshop/CreativeWorkshop";
// import WomenClub from "../OurServices/WomenClub/WomenClub";

import styles from "./Main.module.css";

const Main = ({ children }) => {
  return (
    <div className={styles.main}>
      {/* <h1>Hello from Main</h1> */}
      <div className={styles.mainWrapper}>
        <div className={styles.navigationWrapper}>
            <Navigation />
          {/* <Router>
            <NavigationHooks />
            <Switch>
              <Route path="/" exact component={HomeView} />
              <Route path="/products" component={LegalDocumentsView} />
              <Route path="/services" component={OurServicesView} />
              <Route path="/contact-us" component={AnnouncementNewsView} />
              <Route path="/marketing" component={ResultsWorkView} />
              <Route path="/consulting" component={ContactsView} />
              <Route path="/sign-up" component={AdminView} />
            </Switch>
          </Router> */}
        </div>
        <div className={styles.childrenWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Main;
