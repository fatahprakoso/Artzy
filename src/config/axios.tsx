import axios, { AxiosInstance } from "axios";
import { AxiosBase } from "../types/interfaces";

/**
 * implemented AxiosBase interface for fakeAPI
 *
 * @constant {@link fakeApiConfig}
 * @see {@link https://fakestoreapi.com/ fakeAPIDocs} for api documentations
 */
const fakeApiConfig: AxiosBase = {
  baseURL: "https://fakestoreapi.com/",
  timeout: 10000,

  /**
   * @todo login flow
   */
  headers: { Authorization: "token" },
};

/**
 * ready to use fake api
 *
 * @constant {@link fakeApi}
 * @type {AxiosInstance}
 */
const fakeApi: AxiosInstance = axios.create(fakeApiConfig);

export { fakeApi };
