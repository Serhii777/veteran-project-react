import routes from "../routes";

export const getTitle = (localPath) => {
  let titleNested = "";

  return routes
    .filter((route) => route.path !== "/admin")
    .map((route, index) => {
      if (route.routes !== undefined) {
        route.routes.find((route) => {
          return (titleNested =
            route.path === localPath &&
            route.title !== "" &&
            route.title !== null
              ? route.title
              : null);
        });
      }
      return titleNested;
    })
    .find((item) => (item !== "" && item !== null ? item : null));
};
