import { lazy } from "react";
const userRoutes = [
  {
    path: "/home",
    element: lazy(() => import("../pages/user/main")),
  },
  {
    path: "/detail/:id",
    element: lazy(() => import("../pages/user/product")),
  },
];

export default userRoutes;
