// import React, { Component } from "react";
import React from "react";
import { Route, Redirect } from "react-router-dom";
// import routes from "../../routes";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routesProps
}) => {
  // const isAuthenticated = useSelector(authSelectors.getToken);

  return (
    <Route
      {...routesProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/admin"} />
        )
      }
    />
  );
};

export default PublicRoute;
