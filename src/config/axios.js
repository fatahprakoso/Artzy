import axios from "axios";

const config = {
  baseURL: "https://fakestoreapi.com/",
  timeout: 10000,

  /**
   * @todo
   */
  headers: { Authorization: "token" },
};

const api = axios.create(config);

export { api };
