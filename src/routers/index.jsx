import { createBrowserRouter } from "react-router-dom";

import userRoutes from "./user.router";
import guestRoutes from "./guest.router";

/**
 * Wraped routes from userRouters for user actor and guestRoutes for guest actor if checkLoggedIn is true.
 * Else it would return routes of guest actor
 * @type {Array<Object>}
 */
const routes = [...guestRoutes, ...userRoutes];

/**
 * Processed routes so react-router can use defined routes
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
