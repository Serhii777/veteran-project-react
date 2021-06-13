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
        value: "psychologicalhelp",
        label: "Психологічна допомога",
        component: lazy(() =>
          import("./components/OurServices/PsychologicalHelp/PsychologicalHelp.js" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/legalaid",
        value: "legalaid",
        label: "Правова допомога",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/socioadvice",
        value: "socioadvice",
        label: "Соціально-правова консультація",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/rehabilitation",
        value: "rehabilitation",
        label: "Реабілітолог",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/creativeworkshop",
        value: "creativeworkshop",
        label: "Творча майстерня",
        component: lazy(() =>
          import("./views/OurServicesView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/ourservices/womenclub",
        value: "womenclub",
        label: "Жіночий клуб",
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
        label: "Анонси",
        component: lazy(() =>
        import("./views/AnnouncementView" /* webpackChunkName: "home-view" */)
        ),
      },
      {
        path: "/announcementnews/news",
        label: "Новини",
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
    exact: false,
    public: true,
    restricted: false,
    component: lazy(() =>
      import("./views/AdminView" /* webpackChunkName: "home-view" */)
    ),
    routes: [
      {
        path: "/admin/login",
        label: "Вхід",
        exact: true,
        public: true,
        restricted: true,
        component: lazy(() =>
          import("./views/LoginView" /* webpackChunkName: "login-view" */)
        ),
      },
      {
        path: "/admin/register",
        label: "Реєстрація",
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
