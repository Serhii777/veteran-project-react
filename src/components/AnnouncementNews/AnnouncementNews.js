import React from "react";
import { Route, NavLink } from "react-router-dom";
import routes from "../../routes";

import SvgMegaphoneBlack from "../SvgComponents/SvgMegaphoneBlack";
import Announcement from "./AnnouncementNewsPages/Announcement";
import News from "./AnnouncementNewsPages/News";

import styles from "./AnnouncementNews.module.css";

const AnnouncementNews = () => {
  const routeAnnouncementNews = routes.find((route) =>
    route.path === "/announcementnews" ? route : undefined
  );

  return (
    <div className={styles.announcementNewsWrapper}>
      <div className={styles.сontentPageTitleWrapper}>
        <div className={styles.svgWrapper}>
          <SvgMegaphoneBlack />
        </div>
        <h2 className={styles.announcementNewsTitle}>
          {routeAnnouncementNews.title.slice(0, -1)}
        </h2>
      </div>

      <ul className={styles.announcementNewsList}>
        {routeAnnouncementNews.routes.map((route) => {
          return (
            <li className={styles.announcementNewsItem}>
              <NavLink
                key={route.label}
                to={route.path}
                className={styles.link}
                activeClassName={styles.activelink}>
                {route.title}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <Route path="/announcementnews/announcement" component={Announcement} />
      <Route path="/announcementnews/news" component={News} />
    </div>
  );
};

export default AnnouncementNews;
