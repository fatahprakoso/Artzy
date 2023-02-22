import Loading from "./components/loading";

import styles from "./styles.module.scss";

/**
 * container for containering splash screen loading component
 *
 * @function {@link SplashScreen}
 */
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
