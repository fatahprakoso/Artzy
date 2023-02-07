import { ThreeCircles } from "react-loader-spinner";

import styles from "./styles.module.scss";

const LoadingScreen = () => {
  return (
    <>
      <div className={styles.container}>
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    </>
  );
};

export default LoadingScreen;
