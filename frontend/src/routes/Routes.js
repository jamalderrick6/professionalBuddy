import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { dashboard as dashboardRoutes, auth as authRoutes } from "./index";
import { profileRoutes } from "./index";

import presentationRoutes from "./index";

import DashboardLayout from "../layouts/Dashboard";
import Presentation from "../pages/docs/Presentation";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

import PublicRoute from "../routes/PublicRoute";
import { isLogin } from "../Utils/Common";
import history from "../Utils/history";
import paths from "./paths";

const privateChildRoutes = (Layout, routes) =>
  routes.map(({ children, path, component: Component }, index) =>
    children ? (
      // Route item with children
      children.map(({ path, component: Component }, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={(props) =>
            true ? (
              <Layout>
                <Component {...props} />
              </Layout>
            ) : (
              <Redirect to="/auth/sign-in" />
            )
          }
        />
      ))
    ) : (
      // Route item without children
      <Route
        key={index}
        path={path}
        exact
        render={(props) =>
          true ? (
            <Layout>
              <Component {...props} />
            </Layout>
          ) : (
            <Redirect to="/auth/sign-in" />
          )
        }
      />
    )
  );
console.log("history", history.location);
const Routes = () => (
  <Router history={history}>
    <Switch>
      {privateChildRoutes(DashboardLayout, dashboardRoutes)}
      <PublicRoute
        restricted={true}
        component={SignIn}
        path="/auth/sign-in"
        exact
      />
      <PublicRoute
        restricted={true}
        component={SignUp}
        path="/auth/sign-up"
        exact
      />
    </Switch>
  </Router>
);

export default Routes;
