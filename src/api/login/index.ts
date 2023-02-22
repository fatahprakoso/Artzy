import { fakeApi } from "../../config/axios";

/**
 * @function {@link login}
 * @async login request to FakeAPI
 * @method POST
 * @param {sting} username user's username
 * @param {sting} password user's password
 * @returns {Promise<object>} promise of object that represents data returned from api or error
 */
const login = async (username: string, password: string): Promise<object> => {
  try {
    return await fakeApi.post("auth/login", { username, password });
  } catch (error) {
    return error;
  }
};

export { login };
