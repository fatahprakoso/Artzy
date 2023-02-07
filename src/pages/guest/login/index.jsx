import { useEffect, useState } from "react";

import SplashScreen from "../../general/splash";
import LoginNavbar from "./components/navbar";
import LoginForm from "./components/form";

import styles from "./styles.module.scss";

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

  return (
    <>
      <div className={styles.loginContainer}>
        <LoginNavbar />
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
