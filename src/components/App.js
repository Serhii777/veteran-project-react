import React, { Suspense } from "react";
import { Switch } from "react-router";

import Layout from "./Layout/Layout";
// import Main from "./Main/Main";
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
import routes from "../routes";

import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";

function App() {
  return (
    <Layout>
        <Suspense fallback={<h1>Loading...</h1>}>
          {/* <Suspense fallback={<Spinner />}> */}
          <Switch>
            {/* {routes.map((route) =>
            route.public ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute key={route.label} {...route} />
            )
          )} */}
          </Switch>
        </Suspense>
    </Layout>
  );
}

export default App;
