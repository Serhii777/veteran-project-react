import { lazy } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    label: "home-content",
    title: "Про наш центр",
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
        component: lazy(() =>
          import(
            "./components/OurServices/PsychologicalHelp/PsychologicalHelp.js" /* webpackChunkName: "home-view" */
          )
        ),
      },
      {
        path: "/ourservices/legalaid",
        label: "legalaid",
        title: "Правова допомога",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/socioadvice",
        label: "socioadvice",
        title: "Соціально-правова консультація",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/rehabilitation",
        label: "rehabilitation",
        title: "Реабілітолог",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/creativeworkshop",
        label: "creativeworkshop",
        title: "Творча майстерня",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/womenclub",
        label: "womenclub",
        title: "Жіночий клуб",
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
        component: lazy(() =>
          import("./views/AnnouncementView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/announcementnews/news",
        label: "news",
        title: "Новини",
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
