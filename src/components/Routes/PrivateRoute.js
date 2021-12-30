import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routesProps
}) => {
  return (
    <Route
      {...routesProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={"/admin"} />
      }
    />
  );
};

export default PublicRoute;
