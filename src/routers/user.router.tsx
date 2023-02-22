import { lazy } from "react";
import { Router } from "../types/interfaces";

/**
 * this array represents route of user actor
 *
 * this data represented with array of Router @see {@link Router}
 *
 * @constant {@link userRoutes}
 * @type {Router[]}
 */
const userRoutes: Router[] = [
  {
    name: "user homepage",
    path: "/home",
    element: lazy(() => import("../pages/user/main")),
  },
  {
    name: "product detail page",
    path: "/detail/:id",
    element: lazy(() => import("../pages/user/product")),
  },
];

export default userRoutes;
