import { lazy } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    label: "Про наш центр",
    exact: true,
    public: true,
    restricted: false,
    component: lazy(() =>
      import("./views/HomeView" /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: "/legaldocuments",
    label: "Важливо знати",
    exact: true,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/LegalDocumentsView" /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: "/ourservices",
    label: "Послуги центру",
    exact: false,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
    ),
    routes: [
      {
        path: "/ourservices/psychologicalhelp",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/legalaid",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/socioadvice",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/rehabilitation",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/creativeworkshop",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/womenclub",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
    ],
  },
  {
    path: "/announcementnews",
    label: "Анонси заходів та новини",
    exact: false,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/AnnouncementNewsView" /* webpackChunkName: "home-view" */)
    ),
    routes: [
      {
        path: "/announcementnews/announcement",
        component: lazy(() =>
          import("./views/AnnouncementView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/announcementnews/news",
        component: lazy(() =>
          import("./views/NewsView" /* webpackChunkName: "home-view" */)
        ),
      },
    ],
  },
  {
    path: "/ResultsWork",
    label: "Результати роботи",
    exact: true,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/ResultsWorkView" /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: "/contacts",
    label: "Наші контакти",
    exact: true,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/ContactsView" /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: "/admin",
    label: "Admin-Home page",
    exact: true,
    public: true,
    restricted: false,
    component: lazy(() =>
      import("./views/AdminView" /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: "/login",
    label: "Вход",
    exact: true,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/LoginView" /* webpackChunkName: "login-view" */)
    ),
  },
  {
    path: "/register",
    label: "Регистрация",
    exact: true,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/RegisterView" /* webpackChunkName: "register-view" */)
    ),
  },

  //   {
  //     path: "/admin",
  //     label: "admin",
  //     exact: true,
  //     public: true,
  //     restricted: true,
  //     component: lazy(() =>
  //       import("./views/Admin.js" /* webpackChunkName: "home-view" */)
  //     ),
  //   },
];
