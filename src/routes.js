import { lazy } from "react";

export default [
  {
    path: "/",
    label: "HomePage",
    exact: true,
    public: true,
    restricted: false,
    component: lazy(() =>
      import("./views/HomeView" /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: "/legaldocuments",
    label: "LegalDocuments",
    exact: true,
    public: true,
    restricted: true,
    component: lazy(() =>
      import(
        "./views/LegalDocumentsView.js" /* webpackChunkName: "home-view" */
      )
    ),
  },
  {
    path: "/ourservices",
    label: "OurServices",
    exact: true,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/OurServicesView.js" /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: "/announcementnews",
    label: "AnnouncementNews",
    exact: true,
    public: true,
    restricted: true,
    component: lazy(() =>
      import(
        "./views/AnnouncementNewsView.js" /* webpackChunkName: "home-view" */
      )
    ),
  },
  {
    path: "/ResultsWork",
    label: "ResultsWork",
    exact: true,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/ResultsWorkView.js" /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    public: true,
    restricted: true,
    component: lazy(() =>
      import("./views/ContactsView.js" /* webpackChunkName: "home-view" */)
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

// {
//     path: '/login',
//     label: 'Вход',
//     exact: true,
//     pablic: true,
//     restricted: true,
//     component: lazy(() =>
//       import('./view/LoginView' /* webpackChunkName: "login-view" */),
//     ),
//   },
//   {
//     path: '/register',
//     label: 'Регистрация',
//     exact: true,
//     pablic: true,
//     restricted: true,
//     component: lazy(() =>
//       import('./view/RegisterView' /* webpackChunkName: "register-view" */),
//     ),
//   },
//   {
//     path: '/dairy',
//     label: 'Дневник',
//     exact: true,
//     pablic: false,
//     restricted: false,
//     component: lazy(() =>
//       import('./view/DiaryView' /* webpackChunkName: "dairy-view" */),
//     ),
//   },
