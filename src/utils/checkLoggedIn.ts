import getCookie from "./getCookie";

/**
 * check if current user logged in or not
 *
 * @function {@link checkLoggedIn}
 * @returns {Boolean} auth status
 */
const checkLoggedIn = (): boolean => {
  const token = getCookie("token");

  if (token) return true;
  return false;
};

export default checkLoggedIn;
