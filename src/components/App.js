import React, { Suspense } from "react";
import { Switch } from "react-router";
import Layout from "./Layout/Layout";
import routes from "../routes";

import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";

function App() {
  return (
    <Layout>
      <div>
        <h1>Hello Veteran Project</h1>
      </div>
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
