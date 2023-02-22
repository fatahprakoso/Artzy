import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SplashScreen from "../../general/splash";
import LoginForm from "./components/form";
import Navbar from "../../../components/navbar";
import LoadingLogin from "./components/loadingLogin";

import { login } from "../../../api/login";

import { AiOutlineClose } from "react-icons/ai";

import styles from "./styles.module.scss";

/**
 * it's container or page for login page
 *
 * route path used: "/"
 *
 * @function {@link Login}
 */
const Login = () => {
  const navigate = useNavigate();

  /**
   * isSplash state
   * state that will be decision parameter for rendering spalsh screen
   */
  const [isSplash, setIsSplash] = useState(true);

  /**
   * email state
   * inputted email of user
   */
  const [email, setEmail] = useState();

  /**
   * email state
   * inputted password of user
   */
  const [password, setPassword] = useState();

  /**
   * loading state
   * loading state of API's request for login post
   */
  const [loading, setLoading] = useState(false);

  /**
   * event handler function for request to login api
   * @function {@link tryToLogin}
   */
  const tryToLogin = () => {
    setLoading(() => true);

    login(email, password)
      .then((result) => {
        if (!result?.data?.token) {
          alert("wrong data!");
          return;
        }
        document.cookie = `token=${result}`;
        navigate("/home");
      })
      .catch((e) => alert(e))
      .finally(() => setLoading(() => false));
  };

  /**
   * useEffect
   * change isSplash state to false
   * will be runned on first render only
   */
  useEffect(() => {
    setTimeout(() => {
      setIsSplash(() => false);
    }, 500);
  }, []);

  /**
   * splash screen will be rendered if isSplash state is true
   */
  if (isSplash) {
    return <SplashScreen />;
  }

  return (
    <>
      <div className={styles.loginContainer}>
        <Navbar sec2={"Log in"} sec3={<AiOutlineClose size={22.5} />} />
        <LoginForm
          emailData={email}
          setEmail={setEmail}
          passwordData={password}
          setPassword={setPassword}
          login={tryToLogin}
          loading={loading}
        />
      </div>
    </>
  );
};

export default Login;
