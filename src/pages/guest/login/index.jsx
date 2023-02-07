import { useEffect, useState } from "react";

import SplashScreen from "../../general/splash";

/**
 * A React Component that represents login page and its behaviors
 * @returns {component} Login page that what guest user would see
 */
const Login = () => {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(() => false);
    }, 500);
  }, []);

  if (isSplash) {
    return <SplashScreen />;
  }

  return <div>It's Login</div>;
};

export default Login;
