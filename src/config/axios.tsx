import axios, { AxiosInstance } from "axios";
import { AxiosBase } from "../types/interfaces";

/**
 * implemented AxiosBase interface for fakeAPI
 *
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
 * @type {AxiosInstance}
 */
const fakeApi = axios.create(fakeApiConfig);

export { fakeApi };
