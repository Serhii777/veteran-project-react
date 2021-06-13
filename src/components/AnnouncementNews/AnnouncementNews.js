import React from "react";
import { Route, NavLink } from "react-router-dom";
// import { Router, Switch, Route, NavLink, Link } from "react-router-dom";
// import routes from "../../routes";

import Announcement from "./Announcement/Announcement";
import News from "./News/News";

import styles from "./AnnouncementNews.module.css";

const AnnouncementNews = () => {
  // function RouteWithSubRoutes(route) {
  //   return (
  //     <Route
  //       path={route.path}
  //       render={(props) => <route.component {...props} routes={route.routes} />}
  //     />
  //   );
  // }

  return (
    <div className={styles.announcementNewsWrapper}>
      <h2 className={styles.announcementNewsTitle}>
      Анонси заходів та новини
      </h2>

      {/* <div className={styles.announcementNewsListWrapper}></div> */}
      <ul className={styles.announcementNewsList}>
        <li className={styles.announcementNewsItem}>
          <NavLink
            to="/announcementnews/announcement"
            className={styles.link}
            activeClassName={styles.activelink}>
            Анонси
          </NavLink>
        </li>
        <li className={styles.announcementNewsItem}>
          <NavLink
            to="/announcementnews/news"
            className={styles.link}
            activeClassName={styles.activelink}>
            Новини
          </NavLink>
        </li>
      </ul>

      <Route path="/announcementnews/announcement" component={Announcement} />
      <Route path="/announcementnews/news" component={News} />

      {/* <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch> */}
    </div>
  );
};

export default AnnouncementNews;
