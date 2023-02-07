import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import routers from "./routers";

import SplashScreen from "./pages/general/splash";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<SplashScreen />}>
      <RouterProvider router={routers} />
    </Suspense>
  </React.StrictMode>
);
