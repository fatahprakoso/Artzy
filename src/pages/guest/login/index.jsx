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
 * A React Component that represents login page and its behaviors
 * @returns {component} Login page that what guest user would see
 */
const Login = () => {
  const navigate = useNavigate();

  const [isSplash, setIsSplash] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const tryToLogin = () => {
    setLoading(() => true);

    login({
      username: email,
      password,
    })
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
          loading={loading}
        />
      </div>
    </>
  );
};

export default Login;
