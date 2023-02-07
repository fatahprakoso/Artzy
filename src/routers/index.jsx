import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import userRoutes from "./user.router";
import guestRoutes from "./guest.router";

/**
 * wraped all routes from userRouters for user actor, guestRoutes for guest actor, and
 * generalRoutes for general actor (user and guest)
 * @type {Array<Object>}
 */
const routes = [
  ...userRoutes,
  ...guestRoutes,
  {
    path: "/",
    element: lazy(() => import("../pages/guest/login/index")),
  },
];

/**
 * processed routes so react-router can use defined routes
 * @type {Array<Object>}
 */
const routers = createBrowserRouter(
  routes.map((route) => {
    return {
      path: route.path,
      element: <route.element />,
    };
  })
);

export default routers;
