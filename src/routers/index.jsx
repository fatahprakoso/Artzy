import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import userRoutes from "./user.router";
import guestRoutes from "./guest.router";

const routes = createBrowserRouter([
  ...userRoutes,
  ...guestRoutes,
  {
    path: "/",
    element: lazy(() => import("../App")),
  },
]);

export default routes;
