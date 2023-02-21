import { fakeApi } from "../../config/axios";

/**
 * @function login
 * @async login request to FakeAPI
 * @method POST
 * @param {sting} username user's username
 * @param {sting} password user's password
 * @returns {Object} object that represents data returned from api or error
 */
const login = async (username: string, password: string) => {
  try {
    return await fakeApi.post("auth/login", { username, password });
  } catch (error) {
    return error;
  }
};

export { login };
