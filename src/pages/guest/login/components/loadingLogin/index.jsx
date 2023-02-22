import styles from "./styles.module.scss";

import { MutatingDots } from "react-loader-spinner";

/**
 * component for displaying login post's loading
 *
 * it will displayed if loading state on parent of this component
 * is true
 *
 * @function {@link LoadingLogin}
 */
const LoadingLogin = () => {
  return (
    <>
      <div className={styles.container}>
        <MutatingDots
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};

export default LoadingLogin;
