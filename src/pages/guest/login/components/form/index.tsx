import React, { MouseEventHandler, useRef } from "react";

import { BsQuestionCircle } from "react-icons/bs";
import LoadingLogin from "../loadingLogin";

import styles from "./styles.module.scss";

/**
 * it's component of Login Form where user will inputted their authentication
 * data
 *
 * @function {@link LoginForm}
 * @param {any} props                 component props
 * @param {string} props.emailData    email state value on container component
 * @param {string} props.setEmail     email state setter on container component
 * @param {string} props.passwordData password state value on container component
 * @param {string} props.setPassword  password state setter on container component
 * @param {string} props.login        login function
 * @param {string} props.loading      loading state value on container component
 */
const LoginForm = (props: {
  emailData: string;
  setEmail: Function;
  passwordData: string;
  setPassword: Function;
  login: Function;
  loading: boolean;
}) => {
  const password = useRef();

  /**
   * event handler function for toogling state of input password's flag hidden
   * @function {@link tooglePassword}
   */
  const tooglePassword = () => {
    // TODO: typescript style
    // @ts-ignore
    if (password.current.type == "password") password.current.type = "text";
    // TODO: typescript style
    // @ts-ignore
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
          value={props.emailData}
          onChange={(e) => props.setEmail(e.target.value)}
        />

        <div className={styles.passwordContainer}>
          <input
            type="password"
            name="password"
            className={styles.passwordInput}
            placeholder="PASSWORD"
            ref={password}
            value={props.passwordData}
            onChange={(e) => props.setPassword(e.target.value)}
          />
          <BsQuestionCircle
            onClick={tooglePassword}
            className={styles.tooglePassword}
            size={22.5}
          />
        </div>

        <button
          className={styles.buttonLogin}
          onClick={props.login as MouseEventHandler<HTMLButtonElement>}
        >
          LOG IN
        </button>
      </div>
      {props.loading ? <LoadingLogin /> : undefined}
    </>
  );
};

export default LoginForm;
