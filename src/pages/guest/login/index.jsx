import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SplashScreen from "../../general/splash";
import LoginForm from "./components/form";
import Navbar from "../../../components/navbar";

import { AiOutlineClose } from "react-icons/ai";

import styles from "./styles.module.scss";

/**
 * A React Component that represents login page and its behaviors
 * @returns {component} Login page that what guest user would see
 */
const Login = () => {
  const navigate = useNavigate();

  const [isSplash, setIsSplash] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const tryToLogin = async () => {
    // const result = await login({
    //   username: email,
    //   password,
    // });

    // if (result?.data?.token) {
    //   document.cookie = `token=${result}`;
    //   navigate("/home");
    // } else {
    //   alert(result);
    // }

    navigate("/home");
  };

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
        <Navbar sec2={"Log in"} sec3={<AiOutlineClose size={22.5} />} />
        <LoginForm
          emailData={email}
          setEmail={setEmail}
          passwordData={password}
          setPassword={setPassword}
          login={tryToLogin}
        />
      </div>
    </>
  );
};

export default Login;
