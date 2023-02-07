import { lazy } from "react";
const userRoutes = [
  {
    path: "/home",
    element: lazy(() => import("../pages/user/main")),
  },
];

export default userRoutes;
