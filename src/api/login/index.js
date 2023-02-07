import { api } from "../../config/axios";

/**
 *
 * @param {Object} data which has username and password properties
 * @returns {Object} object that represents data returned from api or error
 */
const login = async (data) => {
  try {
    return await api.post("auth/login", data);
  } catch (error) {
    return error;
  }
};

export { login };
