import React from "react";

import async from "../components/Async";

import routes from "./paths";

import { Home, User, Star, BookOpen } from "react-feather";

// Dashboards components
const HomePage = async(() => import("../pages/dashboards/Home"));
const Professionals = async(() => import("../pages/dashboards/Professional"));

const ProfessionalDetails = async(() =>
  import("../pages/dashboards/Professional/professional_details")
);
const Favorites = async(() => import("../pages/dashboards/Favorites"));
const History = async(() => import("../pages/dashboards/Histories"));

const homeRoutes = {
  path: routes.dashboard_home,
  icon: <Home />,
  id: "Home",
  component: HomePage,
};

const professionalRoutes = {
  id: "Professionals",
  path: routes.professionals,
  icon: <User />,
  component: Professionals,
};

const favoritesRoutes = {
  id: "Favorites",
  path: routes.favorites,
  icon: <Star />,
  component: Favorites,
};

const historyRoutes = {
  id: "History",
  path: routes.histories,
  icon: <BookOpen />,
  component: History,
};

const professionaldetailsRoute = {
  path: routes.professional_details,
  component: ProfessionalDetails,
};

export const dashboard = [
  homeRoutes,
  professionalRoutes,
  favoritesRoutes,
  historyRoutes,
  professionaldetailsRoute,
];

export default [homeRoutes, professionalRoutes, favoritesRoutes, historyRoutes];
