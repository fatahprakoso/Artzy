import { ComponentType, LazyExoticComponent } from "react";

/**
 * @interface Router
 *
 * represents a single browser route of this website
 *
 * @example <caption>example represent of implemented interface on object</caption>
 * const homePage: Router = {path: "/home", element: lazy(() => import("../pages/home"))}
 *
 */
interface Router {
  /**
   * route name
   */
  name: string;

  /**
   * path for web router
   */
  path: string;

  /**
   * components that will represented to browser depend on defined path
   */
  element: LazyExoticComponent<ComponentType>;
}

export { Router };
