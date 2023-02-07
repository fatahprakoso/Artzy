import { useRef } from "react";

import { BsQuestionCircle } from "react-icons/bs";
import LoadingLogin from "../loadingLogin";

import styles from "./styles.module.scss";

const LoginForm = ({
  emailData,
  setEmail,
  passwordData,
  setPassword,
  login,
  loading,
}) => {
  const password = useRef();

  const tooglePassword = () => {
    if (password.current.type == "password") password.current.type = "text";
    else password.current.type = "password";
  };

  return (
    <>
      <div className={styles.formContainer}>
        <input
          type="email"
          name="email"
          className={styles.emailInput}
          placeholder="EMAIL"
          value={emailData}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className={styles.passwordContainer}>
          <input
            type="password"
            name="password"
            className={styles.passwordInput}
            placeholder="PASSWORD"
            ref={password}
            value={passwordData}
            onChange={(e) => setPassword(e.target.value)}
          />
          <BsQuestionCircle
            onClick={tooglePassword}
            className={styles.tooglePassword}
            size={22.5}
          />
        </div>

        <button className={styles.buttonLogin} onClick={login}>
          LOG IN
        </button>
      </div>
      {loading ? <LoadingLogin /> : undefined}
    </>
  );
};

export default LoginForm;
