import { lazy } from "react";
import Login from "../pages/guest/login";
const guestRoutes = [
  {
    path: "/",
    element: lazy(() => import("../pages/guest/login")),
  },
];

export default guestRoutes;
