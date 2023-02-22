import { ComponentType, LazyExoticComponent } from "react";

/**
 *
 * represents a single browser route of this website
 *
 * @interface {@link Router}
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

/**
 * represents custom configuration of axios
 * @interface {@link AxiosBase}
 */
interface AxiosBase {
  /**
   * baseURL of api (commonly domain of api)
   */
  baseURL: string;

  /**
   * request timeout
   * request will throws to exception if timeout exceeded
   */
  timeout: number;

  /**
   * request header
   */
  headers: object;
}

export { Router, AxiosBase };
