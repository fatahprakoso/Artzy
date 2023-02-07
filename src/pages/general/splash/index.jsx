import Loading from "./components/loading";

import styles from "./styles.module.scss";

const SplashScreen = () => {
  return (
    <>
      <div className={styles.splashContainer}>
        <Loading />
      </div>
    </>
  );
};

export default SplashScreen;
