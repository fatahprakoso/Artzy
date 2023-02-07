import { useRef } from "react";

import { BsQuestionCircle } from "react-icons/bs";

import styles from "./styles.module.scss";

const LoginForm = () => {
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
        />

        <div className={styles.passwordContainer}>
          <input
            type="password"
            name="password"
            className={styles.passwordInput}
            placeholder="PASSWORD"
            ref={password}
          />
          <BsQuestionCircle
            onClick={tooglePassword}
            className={styles.tooglePassword}
            size={22.5}
          />
        </div>

        <button className={styles.buttonLogin}>LOG IN</button>
      </div>
    </>
  );
};

export default LoginForm;
