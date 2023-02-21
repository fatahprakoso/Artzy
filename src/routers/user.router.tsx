import { lazy } from "react";
import { Router } from "../types/interfaces";

/**
 * userRoutes
 *
 * this array represents route of user actor
 *
 * this data represented with array of Router
 *
 * @see {@link Router}
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
