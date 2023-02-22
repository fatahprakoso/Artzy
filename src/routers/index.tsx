import React from "react";
import { createBrowserRouter } from "react-router-dom";

import userRoutes from "./user.router";
import guestRoutes from "./guest.router";
import { Router } from "../types/interfaces";

/**
 * Wraped routes from userRouters and guestRoutes
 * @constant {@link routes}
 * @type {Router[]}
 */
const routes: Router[] = [...guestRoutes, ...userRoutes];

/**
 * Processed routes so react-router can use defined routes
 *
 * @constant {@link routers}
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
