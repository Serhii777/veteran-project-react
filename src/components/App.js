import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import { connect } from "react-redux";

import AuthProvider from "./Auth/AuthProvider";

import Layout from "./Layout/Layout";
import Spinner from "./Spinner";
import routes from "../routes";

function App({ isLoadingContent }) {
  return (
    <AuthProvider>
      <Layout>
        <Suspense fallback={<Spinner type="Oval" color="#076702" height={50} width={50}/>}>
          {/* {isLoadingContent && <h2>Loading...</h2>} */}
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

const mapStateToProps = (state) => ({
  isLoadingContent: state.auth.loading,
});

export default connect(mapStateToProps)(App);
