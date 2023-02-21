import getCookie from "./getCookie";

/**
 * check if current user logged in or not
 * @returns {Boolean}
 */
const checkLoggedIn = () => {
  const token = getCookie("token");

  if (token) return true;
  return false;
};

export default checkLoggedIn;
