import { AiOutlineClose } from "react-icons/ai";

import styles from "./styles.module.scss";

const LoginNavbar = () => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.title}>Log in</div>
        <div className={styles.close}>
          <AiOutlineClose size={22.5} />
        </div>
      </div>
    </>
  );
};

export default LoginNavbar;
