// import React, { Component } from "react";
import React from "react";
import { Route, Redirect } from "react-router-dom";
// import routes from "../../routes";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routesProps
}) => {
  return (
    <Route
      {...routesProps}
      render={(props) =>
        isAuthenticated && routesProps.restricted ? (
          <Redirect to={"/"} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
