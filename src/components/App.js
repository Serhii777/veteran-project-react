import React, { Suspense } from "react";
import { Route, Switch } from "react-router";

import AuthProvider from "./Auth/AuthProvider";

import Layout from "./Layout/Layout";
import Spinner from "./Spinner";
import routes from "../routes";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Suspense
          fallback={
            <Spinner type="Oval" color="#076702" height={50} width={50} />
          }>
          <Switch>
            {routes.map((route) => (
              <Route key={route.label} {...route} />
            ))}
          </Switch>
        </Suspense>
      </Layout>
    </AuthProvider>
  );
}

export default App;
