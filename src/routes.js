import { lazy } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    label: "home-content",
    title: "Про наш центр",
    id: 123410,
    exact: true,
    public: true,
    restricted: false,
    component: lazy(() =>
      import("./views/HomeView" /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: "/legaldocuments",
    label: "legaldocuments",
    title: "Важливо знати",
    id: 123420,
    exact: true,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/LegalDocumentsView" /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: "/ourservices",
    label: "ourservices",
    title: "Послуги центру  ►",
    id: 123430,
    exact: false,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
    ),
    routes: [
      {
        path: "/ourservices/psychologicalhelp",
        label: "psychologicalhelp",
        title: "Психологічна допомога",
        id: 123431,
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/legalaid",
        label: "legalaid",
        title: "Правова допомога",
        id: 1234302,
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/socioadvice",
        label: "socioadvice",
        title: "Соціально-правова консультація",
        id: 123433,
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/rehabilitation",
        label: "rehabilitation",
        title: "Реабілітолог",
        id: 123434,
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/creativeworkshop",
        label: "creativeworkshop",
        title: "Творча майстерня",
        id: 123435,
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/womenclub",
        label: "womenclub",
        title: "Жіночий клуб",
        id: 123436,
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
    ],
  },
  {
    path: "/announcementnews",
    label: "announcementnews",
    // title: "Анонси заходів та новини  ►",
    title: "Анонси та новини  ►",
    id: 123440,
    exact: false,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/AnnouncementNewsView" /* webpackChunkName: "home-view" */)
    ),
    routes: [
      {
        path: "/announcementnews/announcement",
        label: "announcement",
        title: "Анонси",
        id: 123441,
        component: lazy(() =>
          import("./views/AnnouncementView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/announcementnews/news",
        label: "news",
        title: "Новини",
        id: 123442,
        component: lazy(() =>
          import("./views/NewsView" /* webpackChunkName: "home-view" */)
        ),
      },
    ],
  },
  {
    path: "/resultswork",
    label: "news",
    title: "Результати роботи",
    id: 123450,
    exact: true,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/ResultsWorkView" /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: "/contacts",
    label: "contacts",
    title: "Наші контакти",
    id: 123460,
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
    title: "Наші контакти",
    id: 123470,
    exact: false,
    public: true,
    restricted: false,
    component: lazy(() =>
      import("./views/AdminView" /* webpackChunkName: "home-view" */)
    ),
    routes: [
      {
        path: "/admin/login",
        label: "login",
        title: "Вхід",
        id: 123471,
        exact: true,
        public: true,
        restricted: true,
        component: lazy(() =>
          import("./views/LoginView" /* webpackChunkName: "login-view" */)
        ),
      },
      {
        path: "/admin/register",
        label: "register",
        title: "Реєстрація",
        id: 1234372,
        exact: true,
        public: true,
        restricted: true,
        component: lazy(() =>
          import("./views/RegisterView" /* webpackChunkName: "register-view" */)
        ),
      },
    ],
  },
];
